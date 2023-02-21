package main

import (
	"github.com/gin-gonic/gin"
	"github.com/jayjayjay-jj/SNA/controller"
	"github.com/jayjayjay-jj/SNA/initializers"
	"github.com/jayjayjay-jj/SNA/middleware"
)


func init(){
	initializers.LoadEnvVariables()
	initializers.ConnectDB()
	initializers.SyncDatabase()
}

func main(){
	
	r := gin.Default()
	r.Use(middleware.SetCORSMiddleware())

	r.POST("/signup", controller.SignUp )
	r.POST("/login", controller.Login )
	r.GET("/ping", middleware.RequireAuth,controller.Ping )
	r.Run() 
}