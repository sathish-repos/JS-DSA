# JavaScript Control Flow: Key Statements and Operators

## Comparison and Logical Operators

### Comparison Operators

| Operator | Description      | Example |
| -------- | ---------------- | ------- |
| ==       | Equal to         | a == b  |
| ===      | Strict equal     | a === b |
| !=       | Not equal        | a != b  |
| !==      | Strict not equal | a !== b |
| >        | Greater than     | a > b   |
| >=       | Greater or equal | a >= b  |
| <        | Less than        | a < b   |
| <=       | Less or equal    | a <= b  |

### Logical Operators

| Operator | Description | Example |
| -------- | ----------- | ------- | ---------- | --- | --- | --- |
| &&       | Logical AND | a && b  |
|          |             |         | Logical OR | a   |     | b   |
| !        | Logical NOT | !a      |

**Example:**

```js
let a = 5,
  b = 10;
console.log(a > 3 && b < 20); // true
console.log(a === 5 || b === 5); // true
console.log(!(a === b)); // true
```

---

## if...else Statement

The `if...else` statement is used to execute code based on a condition.

**Syntax:**

```js
if (condition) {
  // code if condition is true
} else {
```

}

**Example:**

```js
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

You can also use `else if` for multiple conditions:

```js
let score = 85;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
} else {
  console.log("Grade C");
}
```

---

## for loop

The `for` loop is used to repeat a block of code a known number of times.

**Syntax:**

```js
for (initialization; condition; increment) {
  // code block to be executed
}
```

**Example:**

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
// Output: 0 1 2 3 4
```

You can use `break` and `continue` inside a for loop to control the flow.

---

## while and do...while Loop

### while Loop

Repeats a block of code as long as a condition is true.

**Syntax:**

```js
while (condition) {
  // code block
}
```

```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// Output: 0 1 2
```

### do...while Loop

Executes the block at least once, then repeats as long as the condition is true.

**Syntax:**

```js
do {
  // code block
} while (condition);
```

**Example:**

```js
let j = 0;
do {
  console.log(j);
  j++;
// Output: 0 1 2
```

---

## break Statement

The `break` statement is used to exit a loop or switch statement immediately.

**Example with for loop:**

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // exits the loop when i is 5
  }
  console.log(i);
}
// Output: 0 1 2 3 4
```

**Example with while loop:**

```js
let n = 0;
while (n < 10) {
  if (n === 3) break;
  console.log(n);
  n++;
}
// Output: 0 1 2
```

---

## continue Statement

The `continue` statement skips the current iteration of a loop and continues with the next one.

**Example:**

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0 1 3 4
```

**Example with while loop:**

```js
let n = 0;
while (n < 5) {
  n++;
  if (n === 3) continue;
  console.log(n);
}
// Output: 1 2 4 5
```

---

## switch...case Statement

The `switch` statement is used to perform different actions based on different conditions.

**Syntax:**

```js
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
  // code block
}
```

**Example:**

```js
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Other";
}
console.log(dayName); // Wednesday
```
