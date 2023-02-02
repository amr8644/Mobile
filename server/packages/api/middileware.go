package api

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/gorilla/mux"

	"github.com/open-ai/server/packages/utils"
)

// Checking if user is logged in
func Authtication() mux.MiddlewareFunc {

    return func(h http.Handler) http.Handler {
        return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            var u User
	        // Decode the request body then put it inside the struct
            err := json.NewDecoder(r.Body).Decode(&u)
            // Return an error if failed
            if err != nil {
                utils.WriteJSON(w, http.StatusBadRequest,APIError{Err: "Bad Request",Status: http.StatusBadRequest })
            }
            session, _ := store.Get(r, u.Username.String)
        
            _, ok := session.Values["super-secret-key"]
            if strings.Split(r.URL.Path,"/")[1] == "login" || strings.Split(r.URL.Path,"/")[1] == "register" || strings.Split(r.URL.Path,"/")[1] == "logout"{
                h.ServeHTTP(w, r)
            }
            
            if !ok {
                http.Redirect(w,r,"/login",http.StatusAccepted)
                utils.WriteJSON(w, http.StatusUnauthorized, APIError{Err :"Unauthorized",Status: http.StatusUnauthorized})
            }
            if session.Values["authenticated"] == false {
                http.Redirect(w,r,"/login",http.StatusAccepted)
		        utils.WriteJSON(w, http.StatusUnauthorized, APIError{Err :"Unauthorized",Status: http.StatusUnauthorized})
            }
        })
    }
}


// Logging logs all requests with its path and the time it took to process
func Logging() mux.MiddlewareFunc {

    return func(h http.Handler) http.Handler {
        return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            // Do middleware things
            start := time.Now()
            defer func() { log.Println(r.URL.Path, time.Since(start)) }()

            // Call the next middleware/handler in chain
            h.ServeHTTP(w, r)
        })
    }
   
}

