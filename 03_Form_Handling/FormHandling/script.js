const express = require("express")
const path = require("path");
const app = express()

app.use(express.urlencoded({extended:true}))
app.get("/form",(req,res)=>{
    res.sendFile(path.join(__dirname,"form.html"))
})
app.post("/submit",(req,res)=>{
   const{username,useremail,userpassword} = req.body
   res.send(`<h1>Name :${username}</h1>
    <h2>Email :${useremail}</h2>
    <h2>Password ${userpassword}</h2>`)
})
app.listen(3000,()=>{
    console.log("Server is running");
})