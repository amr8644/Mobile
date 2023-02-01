-- name: CreateUser :execresult
INSERT INTO users (
  username, email, password
) VALUES (
   ?, ?, ?
);

-- name: LoginUser :execresult
SELECT username, password FROM users WHERE username = ?;