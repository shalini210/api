const express = require("express")
var mongoose = require("mongoose")
var config = require("../config/config")
var mongoDB= config.mongoDB();
let categorySchema={
    cid:Number,
    cname:String,
    Status:Number
}
mongoose.connect(mongoDB)
.then(()=>console.log("dbconnected"))
.catch(()=>console.log("connection error"))

 categoryModel = mongoose.model("category",categorySchema);
module.exports = categoryModel;