// Dates 

let todayDate = new Date()

console.log(todayDate.toString());
console.log(todayDate.toDateString());
console.log(todayDate.toLocaleString());
console.log(typeof todayDate);


// Times

let time = Date.now()

console.log(time);
console.log(Math.round(Date.now()/1000));