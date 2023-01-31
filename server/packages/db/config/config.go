package db

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)


func ConnectToDB() (db *sql.DB)  {
	log.Println("Connecting to MySQL DB...")
	connstr := "7zvl299euy8qygt8shsn:pscale_pw_UiA7KCCbstkUuns2itrqmjcJHkabDVwOK9ckUtwAq1Y@tcp(ap-southeast.connect.psdb.cloud)/app?tls=true"
	db, err := sql.Open("mysql", connstr)

    if err != nil {
        log.Fatalf("failed to connect: %v", err)
    }

    if err := db.Ping(); err != nil {
		log.Fatalf("Failed to ping: %v", err)
    }

    log.Println("Successfully connected")

	return db
}