package handlers

import (
	"net/http"
	"server/api"
)


type User struct {
	ID int
}

func HTTPHandler(f api.APIFunc) http.HandlerFunc  {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := f(w,r); err != nil{
			if e,ok := err.(*APIError); ok{
				api.WriteJSON(w,e.Status,e)
				return
			}
			api.WriteJSON(w,http.StatusInternalServerError,api.APIError{Err: "Internal Server"})
		}
	}
}


func HandleGetUserByID(w http.ResponseWriter, r *http.Request) error {
	if r.Method != http.MethodGet {
		return api.APIError{Err:"Invalid Method",Status: http.StatusMethodNotAllowed}
	}

	return api.WriteJSON(w, http.StatusOK,User{})
}
