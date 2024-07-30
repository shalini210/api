const express = require("express");
var  mongodb = require("../config/config")
var mongoDB = mongodb.mongoDB()
var mongoose = require('mongoose');
//Set up default mongoose connection

mongoose.connect(mongoDB)
.then(()=>console.log("db connected"))
.catch(()=> console.log('MongoDB connection error:'));
const userSchema = {
    uname:String,
    email:String,
    pwd:String,
    contactno:String
};
const userModel = mongoose.model("user",userSchema);
module.exports = userModel;