package api

import (
	"html/template"
	"net/http"
	"path/filepath"
)

func (s *Server) GetAllChannels(w http.ResponseWriter, r *http.Request) {
	lp := filepath.Join("static", "index.html")
	fp := filepath.Join("static", filepath.Clean(r.URL.Path))

	tmpl, _ := template.ParseFiles(lp, fp)
	tmpl.ExecuteTemplate(w, "layout", nil)

}

