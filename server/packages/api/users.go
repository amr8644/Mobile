package api

import (
	"net/http"

	db "github.com/open-ai/server/packages/db/SQL"
	"github.com/open-ai/server/packages/utils"
)

func (s *Server) RegisterUser(w http.ResponseWriter, r *http.Request) error {
	user := db.Users{
		Fullname: "Amr Ashebo",
		Username: "amr8644",
		Email:    "amr8644@gmail.com",
		Password: "123999",
	}

	return utils.WriteJSON(w, http.StatusOK, user)
}