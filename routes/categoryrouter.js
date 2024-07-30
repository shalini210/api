const express = require("express")
const router = express.Router();
const categorycontroller = require("../controllers/categoryController")
router.get("/",(req,res)=>
{
    res.send("get method of categry")
})
router.post("/",(req,res)=>
{
    let data = categorycontroller.insertCategory(req)
    res.send(data)
})
module.exports = router