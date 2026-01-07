let year = 2022;

const leapYear = (year%4 == 0 && year%100 != 0)? "it's a leap year":(year%400 === 0)? "it's a leap year": "Not a leap year"
console.log(leapYear);