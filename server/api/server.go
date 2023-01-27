package api

import (
	"net/http"
	"server/handler"
)

type Server struct {
	Address string
}

func NewServer(Address string) *Server {
	return &Server{
		Address: Address,
	}
}

func (s *Server) StartServer() error {
	http.HandleFunc("/user",handler.HTTPHandler(handler.HandleGetUserByID))
}

// func ()  {

// }