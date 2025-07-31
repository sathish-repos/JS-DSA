# JavaScript Asynchronous Concepts

This note covers key asynchronous concepts in JavaScript: `setTimeout`, `setInterval`, Callback Functions, Promises, Promise Chaining, and async/await.

---

## 1. setTimeout()

- Schedules a function to run after a specified delay (in milliseconds).
- Syntax: `setTimeout(function, delay, ...args)`

**Example:**

```js
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```

---

## 2. setInterval()

- Repeatedly calls a function with a fixed time delay between each call.
- Syntax: `setInterval(function, delay, ...args)`

**Example:**

```js
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Interval count:", count);
  if (count === 5) clearInterval(intervalId);
}, 1000);
```

---

## 3. Callback Function

- A function passed as an argument to another function, to be executed later.

**Example:**

```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

greet("Alice", () => {
  console.log("Callback executed!");
});
```

---

## 4. Promise and Promise Chaining

- A Promise represents a value that may be available now, later, or never.
- Chaining allows sequential asynchronous operations.

**Example:**

```js
function asyncTask(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > 0) resolve(value * 2);
      else reject("Invalid value");
    }, 1000);
  });
}

asyncTask(5)
  .then((result) => {
    console.log("Result:", result);
    return asyncTask(result);
  })
  .then((result2) => {
    console.log("Chained Result:", result2);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

---

## 5. async/await

- Syntactic sugar over Promises for writing asynchronous code in a synchronous style.

**Example:**

```js
async function runAsyncTasks() {
  try {
    const result = await asyncTask(5);
    console.log("Async/Await Result:", result);
    const result2 = await asyncTask(result);
    console.log("Async/Await Chained Result:", result2);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
}

runAsyncTasks();
```

---

- Use `setTimeout` and `setInterval` for scheduling.
- Use callbacks for simple async flows, Promises for better error handling and chaining, and async/await for readable async code.
