const userController = require("../controller/userController");
const authMiddleware = require('../middleware/userMiddlware');
const express = require("express");
const router = express.Router();

router.get("/",userController.showRegister);
router.post("/register",userController.registerUser);
router.get("/login",userController.showLogin);
router.post("/login",userController.loginUser);
router.get("/dashboard",authMiddleware,userController.showDashboard)
module.exports=router;