# JavaScript try...catch...finally Statement

The `try...catch...finally` statement in JavaScript is used for exception handling. It allows you to test a block of code for errors (try), handle the error (catch), and execute code regardless of the result (finally).

## Syntax

```js
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will run regardless of error
}
```

- **try**: Code inside this block is executed. If an error occurs, control moves to the catch block.
- **catch**: Handles the error. The error object contains information about what went wrong.
- **finally**: This block always executes, whether an error occurred or not. Useful for cleanup code.

## Example

```js
try {
  let result = 10 / 0;
  console.log(result);
  throw new Error("Custom error!");
} catch (err) {
  console.log("Caught error:", err.message);
} finally {
  console.log("This always runs.");
}
```

**Output:**

```
Infinity
Caught error: Custom error!
This always runs.
```

- If no error occurs, the catch block is skipped, but finally still runs.
- If an error occurs, catch runs, then finally.
