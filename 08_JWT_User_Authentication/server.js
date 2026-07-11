const express = require('express');
const {MongoClient} = require('mongodb');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

const dbName = "Auth_MVC";
let db;

async function dbConnection()
{
    await client.connect();
    db = client.db(dbName);
    app.locals.db=db;
    console.log("Database Connected Successfully");
}
dbConnection();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

const userRoutes = require("./routes/userRoutes");
app.use("/",userRoutes);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})