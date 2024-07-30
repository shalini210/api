const userModel = require("../models/usermodel");

exports.insertUser=(req)=>
{
 
const user = {   uname:req.body.uname,
    email:req.body.email,
    pwd:req.body.pwd,
    contactno:req.body.contact
}
 let op =userModel.insertMany(user)
return op;
}
module.exports;