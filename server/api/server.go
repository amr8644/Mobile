package api

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/open-ai/server/db"
	"github.com/open-ai/server/types"
	"github.com/open-ai/server/utils"
	"github.com/redis/go-redis/v9"
)


var redisClient *redis.Client

type Server struct {
	Address string
}

type APIError struct {
	Err    string
	Status int
}

func (e APIError) Error() string {
	return e.Err
}

func HTTPHandler(f utils.APIFunc) http.HandlerFunc  {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := f(w,r); err != nil{
			if e,ok := err.(*APIError); ok{
				utils.WriteJSON(w,e.Status,e)
				return
			}
			utils.WriteJSON(w,http.StatusInternalServerError,APIError{Err: "Internal Server"})
		}
	}
}



func NewServer(Address string) *Server {
	return &Server{
		Address: Address,
	}
}

func (s *Server) StartServer() error {

	ctx := context.TODO()
	db.ConnectToRedis(ctx)
	router := mux.NewRouter()
	router.HandleFunc("/register",HTTPHandler(s.RegisterUser))


	log.Println("Server running on port:",s.Address)
	return http.ListenAndServe(s.Address,router)
}


func (s *Server ) RegisterUser(w http.ResponseWriter, r *http.Request) error{
	new_user := new(types.User)

	user := types.User{
		Fullname: new_user.Fullname,
		Email: new_user.Email,
		Password: new_user.Password,
	}

	return utils.WriteJSON(w,http.StatusOK,user)
}

func setToRedis(ctx context.Context, key, val string) {
	err := redisClient.Set(ctx, key, val, 0).Err()
	if err != nil {
		fmt.Println(err)
	}
}

func getFromRedis(ctx context.Context, key string) string{
	val, err := redisClient.Get(ctx, key).Result()
	if err != nil {
		fmt.Println(err)
	}

	return val
}