package main

import (
	"context"
	"fmt"
	"log"

	"github.com/open-ai/server/api"
)


func main() {
	api.


	api.setToRedis(context.TODO(), "name", "redis-test")
	api.setToRedis(context.TODO(), "name2", "redis-test-2")
	val := api.getFromRedis(context.TODO(),"name")

	fmt.Printf("First value with name key : %s \n", val)
	server := api.NewServer(":8000")
	log.Fatal(server.StartServer())
}


