// Example 1: Find the maximum element in an array
function findMax(arr) {
  return Math.max(...arr);
}

// Example 2: Reverse an array
function reverseArray(arr) {
  return arr.slice().reverse();
}

// Example 3: Sum of all elements
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
