package api

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// var ctx = context.Background()

type Server struct {
	Address string
}

func NewServer(Address string) *Server {
	return &Server{
		Address: Address,
	}
}

func (s *Server) StartServer() error {

	router := mux.NewRouter()
	router.HandleFunc("/register",HTTPHandler(s.RegisterUser)).Methods("POST")

	log.Println("Server running on port:",s.Address)
	return http.ListenAndServe(s.Address,router)
}
