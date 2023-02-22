package sockets

import db "github.com/open-ai/server/packages/db/SQL"

type Hub struct {
	Channels map[string]*db.Channel
}

func NewHub() *Hub  {
	return &Hub{
		Channels: make(map[string]*db.Channel),
	}
}