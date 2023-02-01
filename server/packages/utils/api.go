package utils

import (
	"encoding/json"
	"net/http"

	"golang.org/x/crypto/bcrypt"
)


func HashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
    return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}

type APIFunc func(http.ResponseWriter,* http.Request) error

func WriteJSON(w http.ResponseWriter, status int , v any) error  {
	w.WriteHeader(status)
	w.Header().Add("Content-Type","application/json")
	return json.NewEncoder(w).Encode(v)
}