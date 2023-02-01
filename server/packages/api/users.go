package api

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	db "github.com/open-ai/server/packages/db/SQL"
	conn "github.com/open-ai/server/packages/db/config"

	"github.com/open-ai/server/packages/utils"
)

func (s *Server) RegisterUser(w http.ResponseWriter, r *http.Request) error {

	// Create a new User struct
	var u db.Users
	quries := db.New(conn.ConnectToDB())
	
	// Decode the request body then put it inside the struct
	err := json.NewDecoder(r.Body).Decode(&u)

	// Return an error if failed
    if err != nil {
        utils.WriteJSON(w, http.StatusBadRequest,APIError{Err: "Bad Request",Status: http.StatusBadRequest })
    }

	// Hash the password. Return error if failed
	hashed_password, err := utils.HashPassword(u.Password.String)
	
	if err != nil {
		log.Println(err.Error())
	}

	// Add to database
	user,err := quries.CreateUser(context.Background(),db.CreateUserParams{
		Username: sql.NullString{String: u.Username.String,Valid: true},
		Email: sql.NullString{String: u.Email.String,Valid: true},
		Password: sql.NullString{String: hashed_password,Valid: true},
	})

	if err != nil {
		log.Fatal(err.Error())
	}

	return utils.WriteJSON(w, http.StatusOK, user)
}

func (s *Server) LoginUser(w http.ResponseWriter, r *http.Request) error {

	type User struct{
		Username sql.NullString
	}

	var u User
	quries := db.New(conn.ConnectToDB())
	
	err := json.NewDecoder(r.Body).Decode(&u)

    if err != nil {
        utils.WriteJSON(w, http.StatusBadRequest,APIError{Err: "Bad Request",Status: http.StatusBadRequest })
    }

	// utils.CheckPasswordHash()
	user,err := quries.LoginUser(context.Background(),sql.NullString{String: u.Username.String,Valid: true})

	fmt.Println(user)

	if err != nil {
		log.Fatal(err.Error())
	}

	return utils.WriteJSON(w, http.StatusOK, user)
}