const express = require('express')
const path = require('path')
const {MongoClient} = require('mongodb')

const app = express()

const url = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(url)

const dbName = "MVC_arch";
let db;

async function dbConnection(){
   await client.connect()
   db = client.db(dbName)
   app.locals.db=db
   console.log("Database successfully created");
}
dbConnection()

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"view"))

app.use(express.urlencoded({extended:true}))
const userRoutes = require("./routes/userRoutes")
app.use("/",userRoutes)

app.listen(5000,()=>{
    console.log("Server is running on port number 5000")
})