-- name: CreateUser :execresult
INSERT INTO users (
  fullname, username, email, password
) VALUES (
  ?, ?, ?, ?
);

-- name: GetUser :execresult
SELECT * FROM users WHERE id = ?;