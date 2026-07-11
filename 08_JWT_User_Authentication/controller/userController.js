const bcrypt = require('bcrypt');
const userModel = require("../model/userModel");
const jwt = require('jsonwebtoken');
exports.showRegister = (req,res)=>{
     res.render("register");
}
exports.registerUser = async (req,res)=>{
    try {
        const{username,usermail,password}=req.body;
        const hashedpassword = await bcrypt.hash(password,10);
        await userModel.insertUser(
            req.app.locals.db,
            username,
            usermail,
            hashedpassword
        )
        res.redirect("/login");
        
    } catch (error) {
        console.log(error)
        res.send("Registration failed")
    }
}
exports.showLogin=(req,res)=>{
    res.render("login");
}
exports.loginUser= async (req,res)=>{
     try{
         const{usermail,password}=req.body;
         const existinguser = await userModel.getUser(
            req.app.locals.db,
            usermail
           )
           if(!existinguser)  
           {
             return res.send("User not found");
           }
           const isMatch = await bcrypt.compare(password,existinguser.password);
           if(!isMatch){return res.send("Invalid password");}
           const token = jwt.sign(
             {
                id:existinguser._id,
                username:existinguser.username
             },
             "mysecretkey",
             {
                expiresIn:"1h"
             }
           )
           res.cookie("token",token);
           res.redirect("/dashboard");
     }
     catch(err)
     {
        console.log(err);
        res.send("Login failed");
     }
}

exports.showDashboard=(req,res)=>{
    res.render("dashboard",{
        user : req.user
    });
};
