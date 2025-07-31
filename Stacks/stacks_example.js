// Stack Example: Undo/Redo functionality
// Real-world use: Undo/Redo in text editors

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const undoStack = new Stack();
undoStack.push('Type A');
undoStack.push('Type B');
console.log(undoStack.pop()); // Type B
console.log(undoStack.peek()); // Type A
