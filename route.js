// const app = require("./server.js");
const express = require('express');
const router = express.Router();
let userData
let weight
let height
let bmi

router.post('/',(req,res) => {
    userData =  req.body;
    weight = userData.originalWeight;
    height = userData.height;
    bmi = Math.round(weight/((height/100)*(height/100)));
    console.log("bmi is " + bmi);

})


module.exports = router;
