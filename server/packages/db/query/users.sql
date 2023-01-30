-- name: CreateUser :execresult
INSERT INTO users (
  fullname, username, email, password
) VALUES (
  ?, ?, ?, ?
);
