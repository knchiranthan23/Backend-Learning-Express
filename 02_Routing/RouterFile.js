const express = require('express')
const app = express()

const router = express.Router()

router.use((req,res,next)=>{
    console.log("Router level Middleware is operating");
    next()
})
router.get("/home",(req,res)=>{
    res.send("Welcome Home")
})
module.exports=router