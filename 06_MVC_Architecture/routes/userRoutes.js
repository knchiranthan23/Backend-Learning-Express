const express = require("express")
const router = express.Router()

const userController = require("../controller/userController")

router.get("/",userController.showForm)

router.post("/register",userController.userRegister)

router.get("/users",userController.fetchUsers)

module.exports = router;