const express = require('express')
const app = express();

app.get("/get",(req,res)=>{
    res.send('Please register: <form method="POST"><input name="username"></form>')
})
app.listen(3000,()=>{
    console.log("Running in port 3000")
})