let userDays = 366;

let years = Math.floor(userDays / 365);

let remainingDaysAfterYears = userDays % 365;

let weeks = Math.floor(remainingDaysAfterYears / 7);

let days = remainingDaysAfterYears % 7;

console.log(`${years} Year(s), ${weeks} Week(s), ${days} Day(s)`);