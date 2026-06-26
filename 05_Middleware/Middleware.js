const express = require('express')
const app = express()

//! Application Level Middleware
app.use((req,res,next)=>{
    console.log("Application level middleware is running");
    next();
})

//? Router Level Middleware
const myrouter = require("./RouterFile")
app.use("/user",myrouter)

app.get("/",(req,res)=>{
    res.send("Hello CKN")
})

//todo : Error level middleware
app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})
app.listen(3500,()=>{
    console.log("Running in port 3500");  
})