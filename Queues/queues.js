// Example 1: Queue using array
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
}

// Example 2: Print queue elements
function printQueue(queue) {
  console.log(queue.items.join(', '));
}

// Example 3: Circular queue (basic)
class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }
  enqueue(item) {
    if (this.count === this.size) return false;
    this.queue[this.rear] = item;
    this.rear = (this.rear + 1) % this.size;
    this.count++;
    return true;
  }
  dequeue() {
    if (this.count === 0) return null;
    const item = this.queue[this.front];
    this.front = (this.front + 1) % this.size;
    this.count--;
    return item;
  }
}
