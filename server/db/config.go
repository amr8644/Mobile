package db

import (
	"context"
	"fmt"

	"github.com/redis/go-redis/v9"
)

func ConnectToRedis(ctx context.Context){

	client := redis.NewClient(&redis.Options{
        Addr:    "redis-10973.c89.us-east-1-3.ec2.cloud.redislabs.com:10973",
        Password: "fcYevoBZZNZbLm08pxVOUP59nhRe9IcC",
        DB:       0, 
    })

    pong ,err := client.Ping(ctx).Result();
    if err != nil {
        fmt.Println(err)
    }

    fmt.Println(pong)
}