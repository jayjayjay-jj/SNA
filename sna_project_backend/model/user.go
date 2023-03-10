package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name              string `json:"name"`
	Email             string `json:"email"`
	MobilePhoneNumber string `json:"mobile_phone_number"`
	Password          string `json:"password"`
	RoleID            int    `json:"role_id" gorm:"foreign_key:RoleID"`
}
