const express = require("express");

const userController = require("../controllers/userController");
let router = express.Router();
router.get("/",(req,res)=>
{
    res.send("show all users here ");
})
router.get("/getuser",(req,res)=>
{
    var q = req.query;
    console.log(q)
    res.send(q.uid)
})
router.post("/",(req,res)=>
{
    console.log(req.body)
    const op = userController.insertUser(req)
    res.send(op);
})
router.put("/",(req,res)=>
{
    res.send("update user ");
})
router.delete("/",(req,res)=>
{
    res.send("delete ");
})
module.exports = router;