package sockets

import "github.com/gorilla/websocket"

type Client struct {
	ID   string `json:"id"`
	Conn *websocket.Conn
	ChannelID string `json:"channel_id"`
}