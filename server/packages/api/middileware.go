package api

import (
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/gorilla/mux"
)

// Checking if user is logged in
func Authtication() mux.MiddlewareFunc {

	return func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

			// Get session
			session, _ := store.Get(r, "super-secret-key")

			// Allow certain URL Path
			if strings.Split(r.URL.Path, "/")[1] == "ws" || strings.Split(r.URL.Path, "/")[1] == "login" || strings.Split(r.URL.Path, "/")[1] == "register" || strings.Split(r.URL.Path, "/")[1] == "logout" {
				h.ServeHTTP(w, r)
			}

			// Check if user is authenticated
			if auth, ok := session.Values["authenticated"].(bool); !ok || !auth {
				http.Error(w, "Forbidden", http.StatusForbidden)
				return
			} else {
				h.ServeHTTP(w, r)
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
			defer func() { log.Println(r.Method, r.URL.Path, time.Since(start)) }()

			// Call the next middleware/handler in chain
			h.ServeHTTP(w, r)
		})
	}
}
