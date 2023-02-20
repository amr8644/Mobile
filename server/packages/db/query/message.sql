-- name: SendMessage :execresult
INSERT INTO messages(
  user_id, channel_id, message
) VALUES (
   ?, ?, ?
);
