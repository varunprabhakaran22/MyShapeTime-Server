// const app = require("./server.js");
const express = require('express');
const router = express.Router();
let userData
let weight
let height
let bmi
let age
let weightInPound;
let bmr
let originalWeight 
let desiredWeight
weightInPound = Math.round(originalWeight * 2.20);

router.post('/',(req,res) => {
    userData =  req.body;
    weight = userData.originalWeight;
    height = userData.height;
    originalWeight = userData.originalWeight
    age = userData.age;

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
    if(originalWeight > desiredWeight ){
        bmr = ( 655.1 + ( 9.563 * originalWeight) + ( 1.85 * height  ) - ( 4.676 * age ));
        let caloriesPerDay = ( bmr * 1.1 );
        console.log(caloriesPerDay);
    }
    else
    {
        bmr = ( 655.1 + ( 9.563 * originalWeight) + ( 1.85 * height  ) - ( 4.676 * age ));
        let caloriesPerDay = ( bmr * 1.4 );
        console.log(caloriesPerDay);     
    }
})


module.exports = router;
