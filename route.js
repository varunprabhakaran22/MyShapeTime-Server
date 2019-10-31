// const app = require("./server.js");
const express = require('express');
const router = express.Router();
let userData


router.post('/',(req,res) => {
    userData =  req.body;
    console.log(userData)
    // console.log(typeof(userData))
    // console.log(userData[0])   
})





module.exports = router;
