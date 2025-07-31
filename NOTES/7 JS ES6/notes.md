# JavaScript ES6 Notes

JavaScript ES6 (ECMAScript 2015) introduced many new features to make coding easier and more powerful. Here are some of the most important ES6 features, with explanations, code snippets, and links to example programs:

---

## Arrow Functions

Arrow functions provide a concise syntax for writing functions and do not have their own `this`.

```js
// Traditional function
function add(a, b) {
  return a + b;
}
// Arrow function
const addArrow = (a, b) => a + b;
```

[See example: arrow_function.js](./arrow_function.js)

---

## Default Parameters

Default parameters allow function parameters to have default values if not provided.

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
```

[See example: default_parameters.js](./default_parameters.js)

---

## Template Literals (Template Strings)

Template literals allow embedded expressions and multi-line strings using backticks (`` ` ``).

```js
const name = "Bob";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
```

[See example: template_literals.js](./template_literals.js)

---

## Spread Operator

The spread operator (`...`) expands arrays or objects into individual elements or properties.

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2 }
```

[See example: spread_operator.js](./spread_operator.js)

---

## Map

`Map` is a collection of keyed data items, like an object but with any type of keys.

```js
const map = new Map();
map.set("name", "Alice");
map.set(1, "one");
console.log(map.get("name")); // Alice
```

[See example: map.js](./map.js)

---

## Set and WeakSet

`Set` stores unique values. `WeakSet` stores objects only and does not prevent garbage collection.

```js
const set = new Set([1, 2, 2, 3]); // Set { 1, 2, 3 }
set.add(4);
set.delete(2);
console.log(set.has(2)); // false

const obj = {};
const weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
```

[See example: set_weakset.js](./set_weakset.js)

---

## Destructuring Assignment

Destructuring allows unpacking values from arrays or properties from objects into variables.

```js
const arr = [1, 2, 3];
const [first, , third] = arr; // 1, 3

const person = { name: "Eve", age: 30 };
const { name, age } = person; // Eve, 30
```

[See example: destructuring.js](./destructuring.js)

---

## Classes

Classes are syntactic sugar over JavaScript's prototype-based inheritance.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
```

[See example: classes.js](./classes.js)

---

## Class Inheritance

Classes can extend other classes using `extends`.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
```

[See example: class_inheritance.js](./class_inheritance.js)

---

## for...of Loop

`for...of` iterates over iterable objects (arrays, strings, etc.).

```js
const arr = ["a", "b", "c"];
for (const value of arr) {
  console.log(value);
}
```

[See example: for_of_loop.js](./for_of_loop.js)

---

## Proxies

Proxies allow you to define custom behavior for fundamental operations (e.g., property lookup).

```js
const target = { message: "Hello!" };
const handler = {
  get(obj, prop) {
    if (prop === "message") {
      return obj[prop] + " (from Proxy)";
    }
    return obj[prop];
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.message); // Hello! (from Proxy)
```

[See example: proxies.js](./proxies.js)
