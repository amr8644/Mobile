-- name: SendMessage :execresult
INSERT INTO messages(
  user_id, channel_id,  messages
) VALUES (
   ?, ?, ?
);

-- name: GetMessages :many
SELECT * FROM messages
WHERE channel_id = ?;