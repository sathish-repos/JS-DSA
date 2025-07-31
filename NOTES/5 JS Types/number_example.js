// JavaScript Number Examples

let intNum = 42;
let floatNum = 3.1415;
let strNum = "123";

console.log("Integer:", intNum);
console.log("Float:", floatNum);

// Convert string to number
let num = Number(strNum);
console.log("Converted:", num);

// toFixed
console.log("Fixed (2):", floatNum.toFixed(2));

// isNaN
console.log('isNaN("abc"):', isNaN("abc"));

// Number properties
console.log("Max Value:", Number.MAX_VALUE);
console.log("Min Value:", Number.MIN_VALUE);
