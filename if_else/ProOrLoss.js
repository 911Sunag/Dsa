let cost = 500;
let SellingCost = 500;

if(SellingCost > cost){
    let profit = SellingCost - cost;
    console.log(`${profit}`);
} else if(cost > SellingCost){
  let loss = cost - SellingCost;
  console.log(`${loss}`);
} else{
    console.log("Nuteral")
}

