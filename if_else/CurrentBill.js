let units = 250;

if(units <= 50){
   amt = units * 0.50;

//    console.log(amt);
} else if(units <= 150){
  amt = 25 + ((units - 50) * 0.75);

//   console.log(amt) 
} else if(units <= 250){
    amt = 100 + ((units - 150) * 1.25);
    // console.log(amt);
} else {
   amt = 220 + ((units - 250) * 1.50);
//    console.log(amt);
}

sur_charge = amt * 0.20;

total = amt + sur_charge;

console.log("Your current bill is :" + total + "rs")