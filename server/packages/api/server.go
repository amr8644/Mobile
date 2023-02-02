package api

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
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
	
	// Auth routes
	router.Use(Logging())
	router.Use(Authtication())
	router.HandleFunc("/register",HTTPHandler(s.RegisterUser)).Methods("POST")
	router.HandleFunc("/login",HTTPHandler(s.LoginUser)).Methods("POST")
	router.HandleFunc("/logout",HTTPHandler(s.Logout)).Methods("POST")
	
	// Messages Routes
	// Channels Routes
	router.HandleFunc("/",HTTPHandler(s.GetAllChannels)).Methods("GET")

	log.Println("Server running on port:",s.Address)
	return http.ListenAndServe(s.Address,router)
}
