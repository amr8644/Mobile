server:
	cd cmd && go run main.go
	
migrateup:
	migrate -path packages/db/schema -database "mysql://root:80aLOv9gIY0UIZrVXM3d@tcp(containers-us-west-155.railway.app:5443)/railway" -verbose up

migratedown:
	migrate -path packages/db/schema -database "mysql://root:80aLOv9gIY0UIZrVXM3d@tcp(containers-us-west-155.railway.app:5443)/railway" -verbose drop 


generate:
	.\sqlc.exe generate