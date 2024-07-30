const categoryModel = require("../models/categorymodel")
exports.insertCategory=(req)=>
{
    console.log("inside controller")
    let ct= {
        cid:req.body.id,
        cname:req.body.name,
        Status:req.body.status
    }
   let result=  categoryModel.insertMany(ct)
   
    return (result)
}