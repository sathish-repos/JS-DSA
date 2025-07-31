// More JavaScript Function, Scope, Hoisting, and Recursion Examples

// 1. Function Declaration vs Expression
console.log(square(4)); // 16
function square(x) {
  return x * x;
}
// console.log(squareExpr(4)); // Error: Cannot access before initialization
const squareExpr = function (x) {
  return x * x;
};

// 2. Arrow Function and 'this'
const obj = {
  value: 10,
  regularFunc: function () {
    return this.value;
  },
  arrowFunc: () => {
    // 'this' here is not bound to obj
    return this.value;
  },
};
console.log(obj.regularFunc()); // 10
console.log(obj.arrowFunc()); // undefined

// 3. Scope Example
function scopeTest() {
  if (true) {
    var x = 1;
    let y = 2;
  }
  console.log(x); // 1
  // console.log(y); // Error: y is not defined
}
scopeTest();

// 4. Hoisting Example
hoisted(); // 'Hoisted!'
function hoisted() {
  console.log("Hoisted!");
}
// notHoisted(); // Error: notHoisted is not a function
var notHoisted = function () {
  console.log("Not hoisted!");
};

// 5. Recursion: Sum of Array
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4])); // 10

// 6. Recursion: Reverse String
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str[0];
}
console.log(reverseString("hello")); // 'olleh'
