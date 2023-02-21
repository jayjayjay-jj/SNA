package middleware

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"github.com/jayjayjay-jj/SNA/initializers"
	"github.com/jayjayjay-jj/SNA/model"
)

func RequireAuth(c *gin.Context) {
	//get token
	var header = c.Request.Header.Get("Authorization")
	fmt.Println("auth : " + header)
	var tokenString = header[7:]
	
	//validate token
	token,_ := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
	
		return []byte(os.Getenv("SECRET")), nil
	})
	
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		//validate expiration
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			c.AbortWithStatus(http.StatusUnauthorized)
		}
		
		//find user with token subject
		var user model.User
		initializers.DB.First(&user, claims["sbj"])
		
		if user.ID == 0 {
			c.AbortWithStatus(http.StatusUnauthorized)
		}

		//attach to request
		c.Set("user", user)

		//continue
		c.Next()

	} else {
		c.AbortWithStatus(http.StatusUnauthorized)
	}



}