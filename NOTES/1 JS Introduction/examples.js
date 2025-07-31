// JavaScript Basics Example Programs

// 1. Getting Started With JavaScript
console.log('Hello, JavaScript!');

// 2. JavaScript Variables and Constants
let age = 25;
const PI = 3.14;
var name = 'Alice';
console.log('Age:', age);
console.log('PI:', PI);
console.log('Name:', name);

// 3. JavaScript console.log()
console.log('This is a message');

// 4. JavaScript Data Types
let str = 'Hello';
let num = 10;
let isActive = true;
let nothing = null;
let notDefined;
let person = { name: 'Sam', age: 30 };
let numbers = [1, 2, 3];
console.log('String:', str);
console.log('Number:', num);
console.log('Boolean:', isActive);
console.log('Null:', nothing);
console.log('Undefined:', notDefined);
console.log('Object:', person);
console.log('Array:', numbers);

// 5. JavaScript Operators
let a = 5 + 2; // 7
let b = 10;
b += 3; // 13
let isEqual = (a === b); // false
let isTrue = (a < b) && (b > 10); // true
console.log('a:', a);
console.log('b:', b);
console.log('isEqual:', isEqual);
console.log('isTrue:', isTrue);

// 6. JavaScript Comments
// This is a single-line comment
/*
  This is a
  multi-line comment
*/

// 7. JavaScript Type Conversion
let strNum = '100';
let numVal = Number(strNum); // 100
let boolVal = Boolean(0); // false
let n = 123;
let s = String(n); // '123'
console.log('Number from string:', numVal);
console.log('Boolean from 0:', boolVal);
console.log('String from number:', s);
console.log('parseInt("10.5"):', parseInt('10.5'));
console.log('parseFloat("10.5"):', parseFloat('10.5'));
