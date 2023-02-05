package api

import (
	"log"

	socketio "github.com/googollee/go-socket.io"
)


func Socket() *socketio.Server  {
	server := socketio.NewServer(nil)
	
	server.OnConnect("/", func(s socketio.Conn) error {
		s.SetContext("")
		log.Println("Connected:", s.ID())
		s.Join("bcast")
		return nil
	})

	server.OnEvent("/","global message",func(s socketio.Conn, msg string) {
		log.Println(msg)
	})
	server.BroadcastToRoom("", "bcast", "event:name", "Hello World")

	server.OnDisconnect("/", func(s socketio.Conn, reason string) {
		log.Println("Closed", reason)
	})

	go server.Serve()
	return server
}