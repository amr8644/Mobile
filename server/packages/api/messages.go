package api

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"net/http"

	db "github.com/open-ai/server/packages/db/SQL"
	conn "github.com/open-ai/server/packages/db/config"
	"github.com/open-ai/server/packages/utils"
)

func AddMessage(message string) {
	quries := db.New(conn.ConnectToDB())
	
	msg, err := quries.SendMessage(context.Background(), db.SendMessageParams{
		UserID:    sql.NullInt32{Int32: 1, Valid: true},
		ChannelID: sql.NullInt32{Int32: 1, Valid: true},
		Messages:  sql.NullString{String: message, Valid: true},
	})

	if err != nil {
		log.Println(err)
	}
	fmt.Println("Added Message",msg)	
}

func (s *Server) GetMessages(w http.ResponseWriter, r *http.Request) error {

	// var m Message
	quries := db.New(conn.ConnectToDB())
	
	// Get Message
	msg,err := quries.GetMessages(context.Background(),sql.NullInt32{
		Int32: 1,
		Valid: true,
	})

	if err != nil {
		log.Println(APIError{Err: err.Error(),Status: http.StatusNotFound })
		return utils.WriteJSON(w, http.StatusUnauthorized,APIError{Err: err.Error(),Status: http.StatusUnauthorized })
	}
	
	return utils.WriteJSON(w,http.StatusOK,msg)
}