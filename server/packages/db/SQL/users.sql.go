// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: users.sql

package db

import (
	"context"
	"database/sql"
)

const createUser = `-- name: CreateUser :execresult
INSERT INTO users (
  fullname, username, email, password
) VALUES (
  ?, ?, ?, ?
)
`

type CreateUserParams struct {
	Fullname sql.NullString `json:"fullname"`
	Username sql.NullString `json:"username"`
	Email    sql.NullString `json:"email"`
	Password sql.NullString `json:"password"`
}

func (q *Queries) CreateUser(ctx context.Context, arg CreateUserParams) (sql.Result, error) {
	return q.db.ExecContext(ctx, createUser,
		arg.Fullname,
		arg.Username,
		arg.Email,
		arg.Password,
	)
}

const getUser = `-- name: GetUser :execresult
SELECT id, fullname, email, username, password, profile, created_at FROM users WHERE id = ?
`

func (q *Queries) GetUser(ctx context.Context, id int32) (sql.Result, error) {
	return q.db.ExecContext(ctx, getUser, id)
}
