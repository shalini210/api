const express= require("express");
const userrouter = require("./routes/userrouter");
const categoryrouter = require("./routes/categoryrouter")
const app = express();

app.use(express.urlencoded({extended:true}));
app.use("/category",categoryrouter)
app.use("/user",userrouter)
app.get("/",(req,res)=>
{
    res.send("use /user for user <br> use /category for Category ");
})

app.listen(8080,()=>console.log("server running on port 8080"));