# JavaScript throw Statement

The `throw` statement is used to create custom errors in JavaScript. It allows you to throw exceptions intentionally, which can then be caught by a `catch` block.

## Syntax

```js
throw expression;
```

- The `expression` can be any object, but it's best practice to throw an `Error` object for better debugging.

## Example

```js
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be at least 18 years old.");
  }
  return "Access granted.";
}

try {
  console.log(checkAge(15));
} catch (err) {
  console.log("Error:", err.message);
}
```

**Output:**

```
Error: You must be at least 18 years old.
```

- Use `throw` to signal errors or invalid conditions in your code.
- Combine with `try...catch` for robust error handling.
