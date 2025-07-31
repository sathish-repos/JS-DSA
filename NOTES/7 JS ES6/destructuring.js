// JavaScript Destructuring Assignment Example
// Destructuring allows unpacking values from arrays or properties from objects

const arr = [1, 2, 3];
const [first, , third] = arr;
console.log(first, third); // 1 3

const person = { name: "Eve", age: 30 };
const { name, age } = person;
console.log(name, age); // Eve 30
