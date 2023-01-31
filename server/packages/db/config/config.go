package db

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)


func ConnectToDB() (db *sql.DB)  {
	log.Println("Connecting to MySQL DB...")
	
	connstr := "postgresql://postgres:4oAYOA1LxU73TkSQYNih@containers-us-west-166.railway.app:7945/railway"
	db, err := sql.Open("postgres", connstr)

    if err != nil {
        log.Fatalf("failed to connect: %v", err)
    }

    if err := db.Ping(); err != nil {
		log.Fatalf("Failed to ping: %v", err)
    }

    log.Println("Successfully connected")

	return db
}