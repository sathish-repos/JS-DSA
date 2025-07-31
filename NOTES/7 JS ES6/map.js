// JavaScript Map Example
// Map is a collection of keyed data items, like an object but with any type of keys

const map = new Map();
map.set("name", "Alice");
map.set(1, "one");
console.log(map.get("name")); // Alice
console.log(map.has(1)); // true

// Iterating over Map
for (const [key, value] of map) {
  console.log(key, value);
}
