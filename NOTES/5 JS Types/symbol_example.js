// JavaScript Symbol Examples

let sym1 = Symbol();
let sym2 = Symbol("desc");

console.log("Symbol 1:", sym1);
console.log("Symbol 2:", sym2);

// Using symbols as object keys
const obj = {};
obj[sym1] = "value1";
obj[sym2] = "value2";

console.log("Object with symbols:", obj);

// Symbols are unique
let sym3 = Symbol("desc");
console.log("sym2 === sym3:", sym2 === sym3); // false
