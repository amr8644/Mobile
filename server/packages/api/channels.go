package api

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	db "github.com/open-ai/server/packages/db/SQL"
	conn "github.com/open-ai/server/packages/db/config"

	"github.com/open-ai/server/packages/utils"
)

func (s *Server) CreateChannel(w http.ResponseWriter, r *http.Request) error {

	var c db.Channel
	quries := db.New(conn.ConnectToDB())
	
	// Decode the request body then put it inside the struct
	err := json.NewDecoder(r.Body).Decode(&c)

	// Return an error if failed
    if err != nil {
        utils.WriteJSON(w, http.StatusBadRequest,APIError{Err: "Bad Request",Status: http.StatusBadRequest })
    }

	// Add to database
	channel,err := quries.CreateChannel(context.Background(),db.CreateChannelParams{
		Name: sql.NullString{String: c.Name.String,Valid: true},
		CreatedBy: sql.NullInt32{Int32:c.CreatedBy.Int32,Valid: true},
	})

	if err != nil {
		log.Fatal(err.Error())
	}

	return utils.WriteJSON(w, http.StatusOK, channel)	
}


func (s *Server) JoinChannel(w http.ResponseWriter, r *http.Request) error {

	var cu db.ChannelUser
	quries := db.New(conn.ConnectToDB())
	
	// Decode the request body then put it inside the struct
	err := json.NewDecoder(r.Body).Decode(&cu)

	// Return an error if failed
    if err != nil {
        utils.WriteJSON(w, http.StatusBadRequest,APIError{Err: "Bad Request",Status: http.StatusBadRequest })
    }

	// Add to database
	channel,err := quries.JoinChannel(context.Background(),db.JoinChannelParams{
		UserID: sql.NullInt32{Int32: cu.UserID.Int32,Valid: true},
		ChannelID: sql.NullInt32{Int32: cu.ChannelID.Int32,Valid: true},
	})

	if err != nil {
		log.Fatal(err.Error())
	}

	return utils.WriteJSON(w, http.StatusOK, channel)	
}


