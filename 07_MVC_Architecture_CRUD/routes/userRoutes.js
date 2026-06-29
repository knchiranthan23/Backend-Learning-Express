const userController = require("../controller/userController");
const express = require("express");
const router = express.Router();

router.get("/",userController.showForm);
router.post("/register",userController.userRegister);
router.get("/users",userController.userFetch);
router.get("/edit/:id",userController.userEditForm);
router.post("/update/:id",userController.userUpdate);
router.get("/delete/:id",userController.userDelete);

module.exports=router;