// const app = require("./server.js");
const express = require('express');
const router = express.Router();
let userData
let weight
let height
let bmi
let originalWeight 
let desiredWeight

router.post('/',(req,res) => {
    userData =  req.body;
    weight = userData.originalWeight;
    height = userData.height;
    originalWeight = userData.originalWeight

    //calculating the bmi 
    bmi = Math.round(weight/((height/100)*(height/100)));
    console.log("bmi is " + bmi);

    //categorizing
    if(bmi > 25){
        console.log("over weight");
        
    }

    if(bmi < 19){
        console.log("under weight");
        
    }

    if((bmi > 19)&&( bmi < 25)){
        console.log(" do you want to");
        
    }
    res.json({"bmi":bmi});
})

router.post('/desiredWeight',(req,res) => {
    userData =  req.body;
    weight = userData.desiredWeight;
    desiredWeight = userData.desiredWeight;
    console.log("Goal " + weight);
    res.json({"goal":weight})

    //function calling 
    categorizing();
})


function categorizing(){
    if(originalWeight > desiredWeight ){
        weightloss();
    }
    else
    {
        gainweight();        
    }
}


function weightloss(){
    let weightInPound 
    weightInPound = Math.round(originalWeight * 2.20)
}

module.exports = router;
