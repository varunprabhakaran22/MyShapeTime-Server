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
let caloriesPerDay
let breakfast =[]
let lunch
let dinner
let snacks
let singleMenu
weightInPound = Math.round(originalWeight * 2.20);
let menu = {
	"breakfast": [{
			"Name": "Egg",
			"Protein": 5,
			"Calorie": 78
		},
		{
			"Name": "Milk",
			"Protein": 8,
			"Calorie": 42
		},
		{
			"Name": "Banana",
			"Protein": 1.3,
			"Calorie": 100
		},
		{
			"Name": "OatMmeals",
			"Protein": 17,
			"Calorie": 68
		},
		{
			"Name": "Wheat Bread",
			"Protein": 3.6,
			"Calorie": 69
		}
	],
	
	"lunch" :[{
			"Name": "Chicken Breast",
			"Protein": 20,
			"Calorie": 165
		},
		{
			"Name": "Brown Rice",
			"Protein": 3,
			"Calorie": 111
		},
		{
			"Name": "Spinach",
			"Protein": 2.9,
			"Calorie": 10
		},
		{
			"Name": "Salmon",
			"Protein": 20,
			"Calorie": 185
		},
		{
			"Name": "Tuna",
			"Protein": 20,
			"Calorie": 180
		}
	],
	
	"dinner" :[{
			"Name": "Nuts",
			"Protein": 7,
			"Calorie": 607
		},
		{
			"Name": "Beans",
			"Protein": 8,
			"Calorie": 347
		},	
		{
			"Name": "Avacados",
			"Protein": 2.5,
			"Calorie": 160
		},
		{
			"Name": "Potato",
			"Protein": 2.5,
			"Calorie": 77
		},
		
		{
			"Name": "Chapathi",
			"Protein": 3.5,
			"Calorie": 90
		}
		
	]
}


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
});

router.post('/desiredWeight',(req,res) => {
	let random = 1;
    userData =  req.body;
    weight = userData.desiredWeight;
    desiredWeight = userData.desiredWeight;
    console.log("Goal " + weight);
    //weight loss
    if(originalWeight > desiredWeight ){
        bmr = ( 655.1 + ( 9.563 * originalWeight) + ( 1.85 * height  ) - ( 4.676 * age ));
        caloriesPerDay = ( bmr * 1.1 );
        console.log(caloriesPerDay);
		console.log(menu);
		let max = 5, min = 0;
		for(let i = 0; i < 2; i++){
			let randomOne = 0;
			if(randomOne === random){
				i--;
			}
			else{
				random = Math.round(Math.random() * (+max - +min) + +min);
				randomOne = random;
				console.log(random);
				breakfast = breakfast.push(menu.breakfast[random]);
			}
		}
		console.log(breakfast);
    }
    // weight gain
    {
        bmr = ( 655.1 + ( 9.563 * originalWeight) + ( 1.85 * height  ) - ( 4.676 * age ));
        caloriesPerDay = ( bmr * 1.4 );
        console.log(caloriesPerDay);     
    }
    res.json({"caloriesPerDay" : caloriesPerDay})
    // console.log(menu.Food.length);
    // singleMenu = menu.Food[0];
    // console.log(singleMenu.Name)
});

module.exports = router;
