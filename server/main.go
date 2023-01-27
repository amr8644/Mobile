package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"server/api"
)


func main() {
	address := flag.String("Listening Address" ,":8000","The server address")
	http.ListenAndServe(":3000",nil)

	server := api.NewServer(*address)
	fmt.Println("Server running on port:",address)
	log.Fatal(server.Start())
}


