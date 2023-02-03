package api

import (
	"fmt"
	"log"
	"net/http"
	"sync"

	"github.com/gorilla/websocket"
)

type Client struct {
	ID   string
	Conn *websocket.Conn
	Pool *Pool
	mu   sync.Mutex
}

type Pool struct {
	Register   chan *Client
	UnRegister chan *Client
	Clients    map[*Client]bool
	Broadcast  chan Message
}
type Message struct{
	Type int `json:"type"`
	Body string `json:"body"`
	UserID int 	`json:"user_id"`
	ChannelID int 	`json:"chan_id"`
}

func (c *Client) Read(){
	defer func() {
		c.Pool.UnRegister <- c
		c.Conn.Close()
		}()

	for{

		messageType,p,err :=c.Conn.ReadMessage()
		if err != nil{
			log.Println(err.Error())
			return
		}

		message := Message{Type: messageType,Body: string(p)}
		c.Pool.Broadcast <- message
		fmt.Printf("Message: %+v\n",message)
	}
}

var upgrader = websocket.Upgrader{
	ReadBufferSize: 1024,
	WriteBufferSize: 1024,
}

func Upgrade(w http.ResponseWriter, r *http.Request) (*websocket.Conn,error){
	upgrader.CheckOrigin = func(r *http.Request) bool {return true}
	conn,err := upgrader.Upgrade(w,r,nil)
	if err != nil{
		log.Println(err)
		return nil ,err
	}
	return conn,nil
}

func ServeWS(pool *Pool,w http.ResponseWriter, r *http.Request){
	fmt.Println("WebSocket")
	conn,err := Upgrade(w,r)
	if err != nil {
		fmt.Println(err.Error())
	}

	client := &Client{
		Conn:conn,
		Pool:pool,
	}
	pool.Register <- client
	client.Read()
}
func NewPool() *Pool {
	return &Pool{
		Register: make(chan *Client),
		UnRegister: make(chan *Client),
		Clients: make(map[*Client]bool),
		Broadcast: make(chan Message),
	}
}

func (pool *Pool)Start(){
	for{
		select{
		case client := <-pool.Register:
			pool.Clients[client] = true
			fmt.Println("Size",len(pool.Clients))
			for client := range pool.Clients {				fmt.Println(client)
				client.Conn.WriteJSON(Message{Type: 1,Body: "New user joind"})
				break
			}
		case client := <- pool.UnRegister:
			delete(pool.Clients,client)
			fmt.Println("Size",len(pool.Clients))
			for client := range pool.Clients {				fmt.Println(client)
				client.Conn.WriteJSON(Message{Type: 1,Body: "User Left"})
				break
			}
		
		case message := <- pool.Broadcast:
			for client := range pool.Clients {
				if err := client.Conn.WriteJSON(message); err!= nil{
					fmt.Println(err)
					return
				}
				break
			}
		}
	}
}