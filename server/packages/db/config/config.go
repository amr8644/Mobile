package db

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)
func ConnectToDB()  {
	db,err := sql.Open("mysql","root:wMhjYicF281S9mOGG69v@containers-us-west-176.railway.app:5710/railway")

	if err != nil {
		log.Fatal(err.Error())
	}

	defer db.Close()
	log.Println("Connected")
}