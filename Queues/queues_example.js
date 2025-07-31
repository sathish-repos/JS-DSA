// Queue Example: Print job scheduling
// Real-world use: Print jobs in a printer queue

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const printQueue = new Queue();
printQueue.enqueue('Job1');
printQueue.enqueue('Job2');
console.log(printQueue.dequeue()); // Job1
console.log(printQueue.front()); // Job2
