package initializers

import "github.com/jayjayjay-jj/SNA/model"

func SyncDatabase() {
	DB.AutoMigrate(&model.User{})
}