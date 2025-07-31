# More JavaScript Concepts

Welcome to the advanced JavaScript topics! Use the index below to jump to each section.

## Index
1. [JavaScript and JSON](#javascript-and-json)
2. [JavaScript Date and Time](#javascript-date-and-time)
3. [JavaScript Closures](#javascript-closures)
4. [JavaScript this](#javascript-this)
5. [JavaScript "use strict"](#javascript-use-strict)
6. [JavaScript Iterators and Iterables](#javascript-iterators-and-iterables)
7. [JavaScript Generators](#javascript-generators)
8. [JavaScript Regex](#javascript-regex)
9. [Debugging JavaScript in Browser](#debugging-javascript-in-browser)
10. [Uses of JavaScript](#uses-of-javascript)

---

## 1. JavaScript and JSON
JSON (JavaScript Object Notation) is a lightweight data format for storing and exchanging data. JavaScript can easily convert objects to JSON and back.

**Example:**
```js
const obj = { name: 'Alice', age: 25 };
const jsonStr = JSON.stringify(obj); // Convert object to JSON string
console.log(jsonStr); // '{"name":"Alice","age":25}'
const parsed = JSON.parse(jsonStr); // Convert JSON string back to object
console.log(parsed.name); // 'Alice'
```

---

## 2. JavaScript Date and Time
JavaScript provides the `Date` object to work with dates and times.

**Example:**
```js
const now = new Date();
console.log(now); // Current date and time
console.log(now.getFullYear()); // Year
console.log(now.getMonth() + 1); // Month (0-based)
console.log(now.getDate()); // Day
console.log(now.getHours(), now.getMinutes(), now.getSeconds());
```

- Create a specific date:
```js
const birthday = new Date('2000-01-01T12:00:00');
```
- Format date as string:
```js
console.log(now.toLocaleString());
```

---

## 3. JavaScript Closures
A closure is a function that remembers its outer variables even after the outer function has finished executing.

**Example:**
```js
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

## 4. JavaScript this
The value of `this` depends on how a function is called.

**Example:**
```js
const person = {
  name: 'Bob',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};
person.greet(); // 'Hello, Bob'

function show() {
  console.log(this);
}
show(); // In browser: window, in strict mode: undefined
```

---

## 5. JavaScript "use strict"
`"use strict"` enables strict mode, which catches common coding mistakes and unsafe actions.

**Example:**
```js
'use strict';
x = 10; // Error: x is not defined
```

- Prevents use of undeclared variables
- Makes assignments to non-writable properties throw errors

---

## 6. JavaScript Iterators and Iterables
Iterables are objects that can be iterated over (like arrays, strings). Iterators are objects with a `next()` method.

**Example:**
```js
const arr = [10, 20, 30];
const it = arr[Symbol.iterator]();
console.log(it.next()); // { value: 10, done: false }
console.log(it.next()); // { value: 20, done: false }
console.log(it.next()); // { value: 30, done: false }
console.log(it.next()); // { value: undefined, done: true }
```

- Custom iterable:
```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};
for (let val of myIterable) {
  console.log(val);
}
```

---

## 7. JavaScript Generators
Generators are special functions that can pause and resume using `function*` and `yield`.

**Example:**
```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: undefined, done: true }
```

---

## 8. JavaScript Regex
Regular expressions are patterns for matching text.

**Example:**
```js
const pattern = /\d+/g; // Matches one or more digits
const str = 'There are 15 cats and 7 dogs.';
const matches = str.match(pattern);
console.log(matches); // ['15', '7']
```

- Test a pattern:
```js
console.log(/hello/i.test('Hello world')); // true
```

---

## 9. Debugging JavaScript in Browser
- Use `console.log()` to print values
- Use breakpoints in browser DevTools (Sources tab)
- Inspect variables, call stack, and step through code
- Use `debugger;` statement to pause execution

**Example:**
```js
function testDebug() {
  let a = 5;
  debugger; // Execution will pause here if DevTools is open
  let b = 10;
  console.log(a + b);
}
testDebug();
```

---

## 10. Uses of JavaScript
- Web development (frontend and backend)
- Mobile app development (React Native, Ionic)
- Desktop apps (Electron)
- Game development
- Serverless/cloud functions
- Internet of Things (IoT)
- Automation and scripting

---
