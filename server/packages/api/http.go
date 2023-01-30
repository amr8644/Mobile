package api

import (
	"net/http"

	"github.com/open-ai/server/packages/utils"
)

func HTTPHandler(f utils.APIFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := f(w, r); err != nil {
			if e, ok := err.(*APIError); ok {
				utils.WriteJSON(w, e.Status, e)
				return
			}
			utils.WriteJSON(w, http.StatusInternalServerError, APIError{Err: "Internal Server"})
		}
	}
}
