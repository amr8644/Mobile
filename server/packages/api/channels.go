package api

import (
	"log"
	"net/http"

	"github.com/open-ai/server/packages/utils"
)

func (s *Server) GetAllChannels(w http.ResponseWriter, r *http.Request) error {
	
	log.Println("Hello World")
	return utils.WriteJSON(w,http.StatusOK,"Hello World")
}

