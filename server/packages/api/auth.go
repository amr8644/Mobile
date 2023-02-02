package api

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/sessions"
	db "github.com/open-ai/server/packages/db/SQL"
	conn "github.com/open-ai/server/packages/db/config"

	"github.com/open-ai/server/packages/utils"
)

var (
    // key must be 16, 24 or 32 bytes long (AES-128, AES-192 or AES-256)
    key = []byte("super-secret-key")
    store = sessions.NewCookieStore(key)
)

type User struct {
	Username  sql.NullString `json:"username"`
	Password  sql.NullString `json:"password"`
}

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
	
	var u User
	session, _ := store.Get(r, "super-secret-key")
	quries := db.New(conn.ConnectToDB())
	
	err := json.NewDecoder(r.Body).Decode(&u)
	
    if err != nil {
		log.Println(APIError{Err: "Bad Request",Status: http.StatusBadRequest })
        return utils.WriteJSON(w, http.StatusBadRequest,APIError{Err: "Bad Request",Status: http.StatusBadRequest })
    }
	
	// Get Username and Password
	user,err := quries.LoginUser(context.Background(),sql.NullString{String: u.Username.String,Valid: true})
	
	if err != nil {
		log.Println(APIError{Err: err.Error(),Status: http.StatusNotFound })
		return utils.WriteJSON(w, http.StatusUnauthorized,APIError{Err: err.Error(),Status: http.StatusUnauthorized })
	}

	// Match Password
	match := utils.CheckPasswordHash(u.Password.String,user.Password.String)

	if !match {
		log.Println(APIError{Err: err.Error(),Status: http.StatusUnauthorized })
		return utils.WriteJSON(w, http.StatusUnauthorized,APIError{Err: err.Error(),Status: http.StatusUnauthorized })	
	}

	// Set some session values.
	session.Values["authenticated"] = true
	// session.Values[u.Username.String] = u.Username.String
	log.Println("Logging In")
	log.Println("Redirecting...")
	// Save it before we write to the response/return from the handler.
	session.Save(r, w)

	return utils.WriteJSON(w, http.StatusOK, user)
}

func (s *Server) Logout(w http.ResponseWriter, r *http.Request) error {
	
	var u User
	err := json.NewDecoder(r.Body).Decode(&u)
	if err != nil {
		log.Println(APIError{Err: "Bad Request",Status: http.StatusBadRequest })
		return utils.WriteJSON(w, http.StatusOK, APIError{Err: "Bad Request",Status: http.StatusBadRequest })
    }

    session, _ := store.Get(r, "super-secret-key")

    // Revoke users authentication
    session.Values["authenticated"] = false
	log.Println("Logging Out")
	log.Println("Redirecting...")
    session.Save(r, w)
	return utils.WriteJSON(w, http.StatusOK, u)
}