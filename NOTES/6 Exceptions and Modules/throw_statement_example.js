// Example: JavaScript throw Statement

function squareRoot(x) {
  if (x < 0) {
    throw new Error("Cannot take square root of negative number");
  }
  return Math.sqrt(x);
}

try {
  console.log(squareRoot(9)); // 3
  console.log(squareRoot(-1)); // Error
} catch (err) {
  console.log("Error:", err.message);
}
