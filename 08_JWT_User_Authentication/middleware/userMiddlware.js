const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
  const token = req.cookies.token;
  if(!token)
  {
    return res.redirect("/login");
  }
  const decoded = jwt.verify(token,"mysecretkey");
  try {
     req.user = decoded;
     next();
  } catch (error) {
    console.log(error);
    res.redirect("/login");
  }
}