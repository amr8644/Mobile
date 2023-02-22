package db

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)


func ConnectToDB() (db *sql.DB)  {
    
	log.Println("Connecting to MySQL DB...")
	
	DSN :="t8bljo0072iz4ci3gghe:pscale_pw_jCzleg9vbfD82pRRadacRuoyMHBG33phzrtDoaXt1qF@tcp(ap-south.connect.psdb.cloud)/chat?tls=true"

	db, err := sql.Open("mysql", DSN)

    if err != nil {
        log.Fatalf("failed to connect: %v", err)
    }

    if err := db.Ping(); err != nil {
		log.Fatalf("Failed to ping: %v", err)
    }

    if err != nil {
        panic(err)
    }
	
    log.Println("Successfully connected")

	return db
}