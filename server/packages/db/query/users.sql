-- name: CreateUser :execresult
INSERT INTO users (
  username, email, password
) VALUES (
   ?, ?, ?
);

-- name: LoginUser :one
SELECT * FROM users
WHERE username = ?;