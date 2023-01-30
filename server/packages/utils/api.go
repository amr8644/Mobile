package utils

import (
	"encoding/json"
	"net/http"
)


type APIFunc func(http.ResponseWriter,* http.Request) error

func WriteJSON(w http.ResponseWriter, status int , v any) error  {
	w.WriteHeader(status)
	w.Header().Add("Content-Type","application/json")
	return json.NewEncoder(w).Encode(v)
}