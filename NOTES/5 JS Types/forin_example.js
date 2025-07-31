// JavaScript for...in Loop Example

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...in with array (not recommended)
const arr = [10, 20, 30];
for (let idx in arr) {
  console.log(`Index ${idx}: ${arr[idx]}`);
}
