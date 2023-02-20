package api

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader  = websocket.Upgrader{
	ReadBufferSize: 1024,
	WriteBufferSize: 1024,
}

func Reader(conn *websocket.Conn){
	for {
		message_typ ,p,err := conn.ReadMessage()		
		who := conn.LocalAddr()
		if err != nil {
			log.Println(err)
			return
		}

		AddMessage(string(p))
		log.Println(who ,": ",string(p))
		
		if err := conn.WriteMessage(message_typ,p); err != nil {
			log.Println(err)
			return
		}
	}
}

func Socket(w http.ResponseWriter, r *http.Request) {

	upgrader.CheckOrigin = func(r *http.Request) bool {return true}
	ws,err := upgrader.Upgrade(w,r,nil)
	if err != nil {
		log.Println(err)
	}
	Reader(ws)
}