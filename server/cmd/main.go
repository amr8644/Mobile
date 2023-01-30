package main

import (
	"log"

	"github.com/open-ai/server/packages/api"
	db "github.com/open-ai/server/packages/db/config"
)


func main() {
	db.ConnectToDB()
	server := api.NewServer(":8000")
	log.Fatal(server.StartServer())
}



