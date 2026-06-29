const userModel = require("../model/userModel");

exports.showForm = (req,res)=>{
   res.render("home");
}

exports.userRegister = async (req,res)=>{
    const{username,usermail} = req.body;
    await userModel.userInsert(
        req.app.locals.db,
        username,
        usermail
    )
    res.redirect("/users");
}

exports.userFetch = async (req,res)=>{
   const users = await userModel.userGet(
        req.app.locals.db
    );
    res.render("users",{users});
}

exports.userEditForm = async (req,res)=>{
    const singleUser = await userModel.singleUser(
        req.app.locals.db,
        req.params.id
    );
    res.render("edit",{singleUser});
}

exports.userUpdate = async(req,res)=>{
    const{username,usermail} = req.body;
     await userModel.userSet(
        req.app.locals.db,
        req.params.id,
        username,
        usermail
     );
     res.redirect("/users");
}

exports.userDelete = async(req,res)=>{
    await userModel.userRemove(
        req.app.locals.db,
        req.params.id
    );
    res.redirect("/users");
}