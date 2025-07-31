// JavaScript Default Parameters Example
// Default parameters allow function parameters to have default values

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet()); // Hello, Guest!
