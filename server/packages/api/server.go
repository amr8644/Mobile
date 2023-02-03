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
	pool := NewPool()
	go pool.Start()
	
	// Auth routes
	router.Use(Logging())
	// router.Use(Authtication())
	router.HandleFunc("/register",HTTPHandler(s.RegisterUser)).Methods("POST")
	router.HandleFunc("/login",HTTPHandler(s.LoginUser)).Methods("POST")
	router.HandleFunc("/logout",HTTPHandler(s.Logout)).Methods("POST")
	
	// Messages Routes
	// Channels Routes
	router.HandleFunc("/home",s.GetAllChannels).Methods("GET")
	router.HandleFunc("/ws",func(w http.ResponseWriter, r *http.Request) {
		ServeWS(pool,w,r)
	})
	log.Println("Server running on port:",s.Address)
	return http.ListenAndServe(s.Address,router)
}
