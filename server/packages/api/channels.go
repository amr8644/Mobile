package api

import (
	"net/http"

	"github.com/open-ai/server/packages/utils"
)

func (s *Server) GetAllChannels(w http.ResponseWriter, r *http.Request) error {
	
	http.FileServer(http.Dir("../../static/index.html"))

	return utils.WriteJSON(w,http.StatusOK,"Hello World")
}

