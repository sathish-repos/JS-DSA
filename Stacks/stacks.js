// Example 1: Stack using array
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}

// Example 2: Check for balanced parentheses
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

// Example 3: Reverse a string using stack
function reverseString(str) {
  const stack = str.split('');
  let reversed = '';
  while (stack.length) reversed += stack.pop();
  return reversed;
}
