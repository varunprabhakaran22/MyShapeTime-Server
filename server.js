const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const app = express();
const port = 3000;

app.use(cors())
app.listen(port, ()=> {
    console.log("Port 3000 running on browser...");
})

app.get("/", (req,res)=>{
    res.send("Hey Varun");
})
// module.exports(app)
