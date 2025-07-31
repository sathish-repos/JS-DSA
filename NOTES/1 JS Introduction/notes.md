# JavaScript Basics

Welcome to JavaScript! This guide covers the foundational topics you need to get started. Use the index below to jump to each section.

## Index
1. [Getting Started With JavaScript](#getting-started-with-javascript)
2. [JavaScript Variables and Constants](#javascript-variables-and-constants)
3. [JavaScript console.log()](#javascript-consolelog)
4. [JavaScript Data Types](#javascript-data-types)
5. [JavaScript Operators](#javascript-operators)
6. [JavaScript Comments](#javascript-comments)
7. [JavaScript Type Conversion](#javascript-type-conversion)

---

## 1. Getting Started With JavaScript
JavaScript is a versatile, high-level programming language primarily used for web development. It runs in browsers and on servers (Node.js). You can write JavaScript code in files with the `.js` extension and run them in the browser or with Node.js.

**Example:**
```js
console.log('Hello, JavaScript!');
```

### How to Run JavaScript
- **In the Browser:**
  - Open Developer Tools (F12 or right-click > Inspect > Console tab) and type JavaScript code directly.
  - Or, include a `<script>` tag in your HTML file:
    ```html
    <script>
      alert('Hello from HTML!');
    </script>
    ```
- **With Node.js:**
  - Save your code in a file, e.g., `app.js`, and run: `node app.js` in your terminal.

### Why Learn JavaScript?
- Powers interactive web pages
- Used for both frontend and backend (Node.js)
- Huge ecosystem and community

### Simple Program: Addition
```js
let x = 5;
let y = 10;
console.log('Sum:', x + y); // Output: Sum: 15
```


## 2. JavaScript Variables and Constants
Variables store data values. Use `let` or `var` to declare variables, and `const` for constants (values that do not change).

- `let` – Block-scoped variable.
- `const` – Block-scoped constant (cannot be reassigned).
- `var` – Function-scoped variable (older, less recommended).

**Example:**
```js
let age = 25;
const PI = 3.14;
var name = 'Alice';
```

### Declaring and Reassigning Variables
```js
let city = 'London';
city = 'Paris'; // Allowed
console.log(city); // Paris

const country = 'India';
// country = 'USA'; // Error: Assignment to constant variable

var language = 'English';
language = 'French'; // Allowed
```

### Variable Naming Rules
- Can contain letters, digits, `$`, and `_`
- Cannot start with a digit
- Case-sensitive (`myVar` ≠ `myvar`)
- Use camelCase for variables: `userName`, `totalAmount`

### Hoisting
`var` declarations are hoisted (moved to the top of their scope), but `let` and `const` are not.
```js
console.log(a); // undefined
var a = 10;
// console.log(b); // ReferenceError
let b = 20;
```


## 3. JavaScript console.log()
`console.log()` is used to print output to the browser console or terminal. It's useful for debugging and displaying information.

**Example:**
```js
console.log('This is a message');
```

### More Usage Examples
```js
let num = 42;
console.log('The number is', num);
console.log('Sum:', 5 + 7);
console.log('Array:', [1, 2, 3]);
console.log('Object:', { name: 'Sam', age: 30 });
```

### Other Console Methods
- `console.error('Error message')` – Shows error in red
- `console.warn('Warning!')` – Shows warning
- `console.table([{a:1, b:2}, {a:3, b:4}])` – Displays data as a table
```js
console.error('Something went wrong!');
console.warn('This is a warning!');
console.table([
  { name: 'Alice', score: 90 },
  { name: 'Bob', score: 85 }
]);
```


## 4. JavaScript Data Types
JavaScript supports several data types:
- **String**: Text, e.g., `'hello'`
- **Number**: Numeric values, e.g., `42`, `3.14`
- **Boolean**: `true` or `false`
- **Undefined**: Variable declared but not assigned
- **Null**: Explicitly no value
- **Object**: Key-value pairs, e.g., `{ name: 'Bob' }`
- **Array**: Ordered list, e.g., `[1, 2, 3]`

**Example:**
```js
let str = 'Hello';
let num = 10;
let isActive = true;
let nothing = null;
let notDefined;
let person = { name: 'Sam', age: 30 };
let numbers = [1, 2, 3];
```

### More Examples
```js
// String
let greeting = "Hi!";
// Number
let price = 19.99;
// Boolean
let isLoggedIn = false;
// Undefined
let x;
// Null
let y = null;
// Object
let car = { brand: 'Toyota', year: 2020 };
// Array
let fruits = ['apple', 'banana', 'cherry'];
```

### Checking Data Types
Use `typeof` operator:
```js
console.log(typeof greeting); // string
console.log(typeof price); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof x); // undefined
console.log(typeof y); // object (quirk: null is object)
console.log(typeof car); // object
console.log(Array.isArray(fruits)); // true
```

### Special Values
- `NaN` (Not a Number): Result of invalid math operation, e.g., `0/0`
- `Infinity` and `-Infinity`: Result of division by zero
```js
console.log(0/0); // NaN
console.log(1/0); // Infinity
```


## 5. JavaScript Operators
Operators perform operations on variables and values.
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- **Comparison**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical**: `&&`, `||`, `!`

**Example:**
```js
let a = 5 + 2; // 7
let b = 10;
b += 3; // 13
let isEqual = (a === b); // false
let isTrue = (a < b) && (b > 10); // true
```

### Arithmetic Operators
```js
let x = 8;
let y = 3;
console.log(x - y); // 5
console.log(x * y); // 24
console.log(x / y); // 2.666...
console.log(x % y); // 2
x++;
console.log(x); // 9
y--;
console.log(y); // 2
```

### Assignment Operators
```js
let n = 5;
n *= 2; // n = n * 2 => 10
n -= 3; // n = n - 3 => 7
console.log(n);
```

### Comparison Operators
```js
console.log(5 == '5'); // true (loose equality)
console.log(5 === '5'); // false (strict equality)
console.log(7 != 8); // true
console.log(7 !== '7'); // true
console.log(10 > 5); // true
console.log(10 <= 5); // false
```

### Logical Operators
```js
let isAdult = true;
let hasTicket = false;
console.log(isAdult && hasTicket); // false
console.log(isAdult || hasTicket); // true
console.log(!isAdult); // false
```

### Ternary Operator
```js
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote); // Yes
```


## 6. JavaScript Comments
Comments are ignored by JavaScript and used to explain code.
- **Single-line:** `// This is a comment`
- **Multi-line:**
```js
/*
  This is a
  multi-line comment
*/
```

### Why Use Comments?
- To explain code logic
- To make code more readable
- To temporarily disable code (comment out)

### Examples
```js
// This is a single-line comment
let x = 10; // This is an inline comment

/*
  This function adds two numbers
*/
function add(a, b) {
  return a + b;
}

// Commenting out code
// let y = 20;
```


## 7. JavaScript Type Conversion
JavaScript can convert values between types automatically (implicit) or using functions (explicit).

- **String to Number:** `Number('123')` → `123`
- **Number to String:** `String(123)` → `'123'`
- **Boolean to Number:** `Number(true)` → `1`
- **Parse Int/Float:** `parseInt('10.5')` → `10`, `parseFloat('10.5')` → `10.5`

**Example:**
```js
let str = '100';
let num = Number(str); // 100
let bool = Boolean(0); // false
let n = 123;
let s = String(n); // '123'
```

### Implicit vs Explicit Conversion
- **Implicit:** JavaScript automatically converts types when needed.
  ```js
  let result = '5' * 2; // 10 (string '5' converted to number)
  let sum = '5' + 2; // '52' (number 2 converted to string)
  ```
- **Explicit:** You use functions like `Number()`, `String()`, `Boolean()`.

### More Examples
```js
console.log(Number('42')); // 42
console.log(String(42)); // '42'
console.log(Boolean('')); // false
console.log(Boolean('hello')); // true
console.log(parseInt('101abc')); // 101
console.log(parseFloat('3.14xyz')); // 3.14
console.log((123).toString()); // '123'
```

### Common Pitfalls
- `Number('abc')` returns `NaN`
- `Boolean(0)` is `false`, but `Boolean('0')` is `true`
- `parseInt('08')` returns `8`, but `parseInt('08', 8)` returns `0` (octal)

### Checking for NaN
```js
let val = Number('abc');
console.log(isNaN(val)); // true
```

