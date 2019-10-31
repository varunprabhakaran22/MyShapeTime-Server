const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const port = require("dotenv")

app.use(cors())
app.listen(3000, ()=> {
    console.log("Your port");
})

app.get("/", (req,res)=>{
    res.send("Hey Varun");
})
// module.exports(app)
