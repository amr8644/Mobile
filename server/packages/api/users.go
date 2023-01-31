package api

import (
	"context"
	"database/sql"
	"log"
	"net/http"

	db "github.com/open-ai/server/packages/db/SQL"
	conn "github.com/open-ai/server/packages/db/config"

	"github.com/open-ai/server/packages/utils"
)

func (s *Server) RegisterUser(w http.ResponseWriter, r *http.Request) error {

	quries := db.New(conn.ConnectToDB())

	user,err := quries.CreateUser(context.Background(),db.CreateUserParams{
		Fullname: sql.NullString{String: "Amr",Valid: true},
		Username: sql.NullString{String: "amr8644",Valid: true},
		Email: sql.NullString{String: "ammd@gmail.com",Valid: true},
		Password: sql.NullString{String: "22222",Valid: true},
	})

	if err != nil {
		log.Fatal(err.Error())
	}
	
	insertedAuthorID, err := user.LastInsertId()
	if err != nil {
		return err
	}
	log.Println(insertedAuthorID)

	// get the author we just inserted
	fetchedUser, err := quries.GetUser(context.Background(), int32(insertedAuthorID))
	if err != nil {
		return err
	}

	return utils.WriteJSON(w, http.StatusOK, fetchedUser)
}