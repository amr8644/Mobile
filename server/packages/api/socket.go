package api

import (
	"fmt"
	"io"
	"log"

	"golang.org/x/net/websocket"
)

type Sockets struct {
	conns map[*websocket.Conn]bool
}

func NewSockets() *Sockets {
	return &Sockets{
		conns: make(map[*websocket.Conn]bool),
	}
}

func (s *Sockets) Socket(ws *websocket.Conn) {
	fmt.Println("New conn", ws.RemoteAddr())
	s.conns[ws] = true
	s.ReadLoop(ws)
}

func (s *Sockets) ReadLoop(ws *websocket.Conn) {
	buffer := make([]byte, 1024)
	for {
		n, err := ws.Read(buffer)
		if err != nil {
			if err == io.EOF {
				break
			}
			log.Println("Error:", err)
			continue
		}
		message := buffer[:n]
		s.BroadCast(message)
		// log.Println(string(message))
		// ws.Write([]byte("Hello there"))
	}
}

func (s *Sockets) BroadCast(b []byte) {
	for ws := range s.conns {
		go func(c *websocket.Conn) {
			if _, err := ws.Write(b); err != nil {
				log.Println("Error:", err)
			}
		}(ws)
	}
}
