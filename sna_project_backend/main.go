package main

import (
	"all/config"
	"all/route"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rs/cors"
)

func main() {

	config.Connect()

	options := cors.Options{
		AllowedOrigins:   []string{"http://localhost:3001"},
		AllowedMethods:   []string{"GET", "POST", "PATCH", "PUT", "DEELTE", "OPTIONS"},
		AllowCredentials: true,
	}

	router := gin.New()

	route.UserRoute(router)

	http.ListenAndServe(":8080", cors.New(options).Handler(router))
}
