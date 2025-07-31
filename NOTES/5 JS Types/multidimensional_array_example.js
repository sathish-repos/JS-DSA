// JavaScript Multidimensional Array Example

// Creating a 2D array (matrix)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix:", matrix);

// Accessing elements
console.log("Element at (1,2):", matrix[1][2]); // 6

// Iterating over a 2D array
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] =`, matrix[i][j]);
  }
}
