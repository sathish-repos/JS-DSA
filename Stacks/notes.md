
# Stacks

## Description
A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. The last element added is the first one to be removed. Stacks are used in function calls, undo operations, expression evaluation, and more.

## Common Operations

### 1. Push (Insert)
- **Description:** Add an element to the top of the stack.
- **Pseudocode:**
  ```
  function push(stack, value):
      stack.top = stack.top + 1
      stack[stack.top] = value
  ```
- **Code Snippet:**
  ```js
  stack.push(10);
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

### 2. Pop (Remove)
- **Description:** Remove and return the top element.
- **Pseudocode:**
  ```
  function pop(stack):
      if stack is empty:
          return error
      value = stack[stack.top]
      stack.top = stack.top - 1
      return value
  ```
- **Code Snippet:**
  ```js
  stack.pop();
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

### 3. Peek (Top)
- **Description:** Return the top element without removing it.
- **Pseudocode:**
  ```
  function peek(stack):
      if stack is empty:
          return error
      return stack[stack.top]
  ```
- **Code Snippet:**
  ```js
  stack[stack.length - 1];
  // or stack.peek() if using a class
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

### 4. isEmpty
- **Description:** Check if the stack is empty.
- **Pseudocode:**
  ```
  function isEmpty(stack):
      return stack.top == -1
  ```
- **Code Snippet:**
  ```js
  stack.length === 0;
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

## Step-by-Step Example: Push and Pop
Given stack = [1, 2, 3], push 4:
1. Add 4 to the end: [1, 2, 3, 4]
2. Pop removes 4: [1, 2, 3]

## More Examples
```js
// Check for balanced parentheses
function isBalanced(expr) {
  const stack = [];
  for (let char of expr) {
    if (char === '(') stack.push(char);
    else if (char === ')') {
      if (!stack.length) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

// Reverse a string using stack
function reverseString(str) {
  const stack = str.split('');
  let reversed = '';
  while (stack.length) reversed += stack.pop();
  return reversed;
}
```

## Time and Space Complexity Summary
| Operation | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| Push      | O(1)           | O(1)            |
| Pop       | O(1)           | O(1)            |
| Peek      | O(1)           | O(1)            |
| isEmpty   | O(1)           | O(1)            |
