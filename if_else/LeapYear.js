let year = 2026;

if(((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0)){
   console.log(`${year} is Leap Year`)
} else{
    console.log("IS NOT A LEAP YEAR")
}