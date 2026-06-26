const userModel = require("../model/userModel")

exports.showForm = (req,res)=>{
    res.render("home")
}

exports.userRegister = async(req,res)=>{
      const {username,usermail} = req.body
      await userModel.insertUsers(
        req.app.locals.db,
        username,
        usermail
      );
      res.redirect("/users")
}

exports.fetchUsers = async(req,res)=>{
   const users = await userModel.usersFetch(
        req.app.locals.db
    )
    res.render("users",{users})
}