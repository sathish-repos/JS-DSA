// JavaScript Array Examples

// Creating an array
let fruits = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);

// Adding elements
fruits.push("date");
console.log("After push:", fruits);

// Removing last element
let last = fruits.pop();
console.log("Popped:", last, "Fruits:", fruits);

// Iterating over array
fruits.forEach((fruit, idx) => {
  console.log(`Index ${idx}: ${fruit}`);
});

// Using map to create a new array
let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Uppercase:", upperFruits);
