// More JavaScript Concepts: Example Programs

// 1. JavaScript and JSON
const obj = { name: 'Alice', age: 25 };
const jsonStr = JSON.stringify(obj);
console.log('JSON String:', jsonStr);
const parsed = JSON.parse(jsonStr);
console.log('Parsed name:', parsed.name);

// 2. JavaScript Date and Time
const now = new Date();
console.log('Now:', now);
console.log('Year:', now.getFullYear());
console.log('Month:', now.getMonth() + 1);
console.log('Day:', now.getDate());
console.log('Time:', now.getHours(), now.getMinutes(), now.getSeconds());
const birthday = new Date('2000-01-01T12:00:00');
console.log('Birthday:', birthday);
console.log('Locale String:', now.toLocaleString());

// 3. JavaScript Closures
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log('Counter:', counter());
console.log('Counter:', counter());

// 4. JavaScript this
const person = {
  name: 'Bob',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};
person.greet();
function show() {
  console.log(this);
}
show();

// 5. JavaScript "use strict"
'use strict';
// x = 10; // Uncommenting this line will throw an error
let y = 20;
console.log('y:', y);

// 6. JavaScript Iterators and Iterables
const arr = [10, 20, 30];
const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};
for (let val of myIterable) {
  console.log('Custom iterable value:', val);
}

// 7. JavaScript Generators
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

// 8. JavaScript Regex
const pattern = /\d+/g;
const str = 'There are 15 cats and 7 dogs.';
const matches = str.match(pattern);
console.log('Matches:', matches);
console.log(/hello/i.test('Hello world'));

// 9. Debugging JavaScript in Browser
function testDebug() {
  let a = 5;
  // debugger; // Uncomment to pause in DevTools
  let b = 10;
  console.log('Sum:', a + b);
}
testDebug();

// 10. Uses of JavaScript
// See notes for details on use cases.
