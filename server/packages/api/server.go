package api

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"golang.org/x/net/websocket"
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

	router := mux.NewRouter()
	io := NewSockets()

	// Auth routes
	router.Use(Logging())
	// router.Use(Authtication())
	router.HandleFunc("/register", HTTPHandler(s.RegisterUser)).Methods("POST")
	router.HandleFunc("/login", HTTPHandler(s.LoginUser)).Methods("POST")
	router.HandleFunc("/logout", HTTPHandler(s.Logout)).Methods("POST")

	// Messages Routes

	// router.HandleFunc("/ws", HTTPHandler(websocket.Handler(io.Socket)))
	// http.Handle("/ws", websocket.Handler(io.Socket))
	router.Handle("/ws", websocket.Handler(io.Socket))

	router.HandleFunc("/get-msg", HTTPHandler(s.GetMessages)).Methods("GET")

	log.Println("Server running on port:", s.Address)
	return http.ListenAndServe(s.Address, router)
}
