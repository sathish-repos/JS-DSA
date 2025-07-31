// Example: JavaScript try...catch...finally

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  } catch (err) {
    console.log("Error:", err.message);
    return null;
  } finally {
    console.log("Division attempted.");
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // null
