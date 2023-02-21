package route

import (
	"all/controller"

	"github.com/gin-gonic/gin"
)

func UserRoute(router *gin.Engine) {
	router.POST("/sign-up", controller.SignUp)
	router.POST("/sign-in", controller.SignIn)
}
