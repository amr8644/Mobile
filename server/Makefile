run:
	cd cmd && go run main.go

build:
	cd cmd && go install main.go
	
migrateup:
	migrate -path packages/db/schema -database "mysql://t8bljo0072iz4ci3gghe:pscale_pw_jCzleg9vbfD82pRRadacRuoyMHBG33phzrtDoaXt1qF@tcp(ap-south.connect.psdb.cloud)/chat?tls=true" -verbose up

migratedown:
	migrate -path packages/db/schema -database "mysql://t8bljo0072iz4ci3gghe:pscale_pw_jCzleg9vbfD82pRRadacRuoyMHBG33phzrtDoaXt1qF@tcp(ap-south.connect.psdb.cloud)/chat?tls=true" -verbose drop 

generate:
	.\sqlc.exe generate