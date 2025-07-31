# JavaScript Functions, Scope, Hoisting, and Recursion

## 1. Function and Function Expressions

### Function Declaration

A function declaration defines a named function. It is hoisted, so you can call it before its definition in the code.

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Function Expression

A function expression creates a function and assigns it to a variable. It can be anonymous or named. Function expressions are not hoisted.

```js
const add = function (a, b) {
  return a + b;
};
```

### Arrow Functions

Arrow functions provide a shorter syntax and do not have their own `this`.

```js
const multiply = (a, b) => a * b;
```

---

## 2. Variable Scope

- **Global Scope**: Variables declared outside any function are global.
- **Function Scope**: Variables declared with `var` inside a function are local to that function.
- **Block Scope**: Variables declared with `let` or `const` inside a block `{}` are only accessible within that block.

```js
let globalVar = "I am global";

function testScope() {
  var functionVar = "I am function scoped";
  if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // Accessible here
  }
  // console.log(blockVar); // Error: blockVar is not defined
  console.log(functionVar); // Accessible here
}
```

---

## 3. Hoisting

- **Hoisting** is JavaScript's default behavior of moving declarations to the top of the current scope.
- `var` declarations are hoisted and initialized as `undefined`.
- `let` and `const` are hoisted but not initialized (temporal dead zone).
- Function declarations are hoisted, but function expressions are not.

```js
console.log(a); // undefined
var a = 5;

// console.log(b); // ReferenceError
// let b = 10;

hoistedFunction(); // Works
function hoistedFunction() {
  console.log("I am hoisted!");
}

// notHoisted(); // TypeError
var notHoisted = function () {
  console.log("I am NOT hoisted!");
};
```

---

## 4. Recursion

A function that calls itself to solve a problem. Always define a base case to prevent infinite recursion.

### Example: Factorial

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

### Example: Fibonacci

```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

---

## Summary Table

| Concept              | Hoisted | Scope           | Example Syntax           |
| -------------------- | ------- | --------------- | ------------------------ |
| Function Declaration | Yes     | Function/Global | function foo() {...}     |
| Function Expression  | No      | Block           | const foo = function(){} |
| Arrow Function       | No      | Block           | const foo = () => {}     |
| var                  | Yes     | Function/Global | var x = 1;               |
| let/const            | No      | Block           | let x = 1; const y=2;    |
