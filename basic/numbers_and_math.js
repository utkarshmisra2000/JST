let num = 100;
let num1 = new Number(200);

console.log(num);
console.log(num1);


console.log(num1.toFixed(2));

let num2 = 100.223;

console.log(num2.toPrecision(4));

let num3 = 1000000000

console.log(num3.toLocaleString('en-IN'));

console.log(Math.abs(-100));
console.log(Math.round(456.66));
console.log(Math.ceil(456.66));
console.log(Math.floor(456.66));
console.log(Math.sqrt(81));

console.log(Math.random());

let min = 50;
let max = 100;

console.log(Math.floor(Math.random()*(max-min+1))+min);