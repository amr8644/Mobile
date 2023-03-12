run:
	cd cmd && go run main.go

build:
	cd cmd && go install main.go
	
migrateup:
	migrate -path packages/db/schema -database "mysql://root:QoxVl6zxqlFEcOOKSK8E@tcp(containers-us-west-186.railway.app:7714)/railway" -verbose up

migratedown:
	migrate -path packages/db/schema -database "mysql://root:QoxVl6zxqlFEcOOKSK8E@tcp(containers-us-west-186.railway.app:7714)/railway" -verbose drop 

generate:
	.\sqlc.exe generate