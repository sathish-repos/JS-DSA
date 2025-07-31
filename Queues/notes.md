
# Queues

## Description
A queue is a linear data structure that follows the First In, First Out (FIFO) principle. The first element added is the first one to be removed. Queues are used in scheduling, breadth-first search (BFS), and more.

## Common Operations

### 1. Enqueue (Insert)
- **Description:** Add an element to the rear of the queue.
- **Pseudocode:**
  ```
  function enqueue(queue, value):
      queue.rear = queue.rear + 1
      queue[queue.rear] = value
  ```
- **Code Snippet:**
  ```js
  queue.push(10);
  // or queue.enqueue(10) if using a class
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

### 2. Dequeue (Remove)
- **Description:** Remove and return the front element.
- **Pseudocode:**
  ```
  function dequeue(queue):
      if queue is empty:
          return error
      value = queue[queue.front]
      queue.front = queue.front + 1
      return value
  ```
- **Code Snippet:**
  ```js
  queue.shift();
  // or queue.dequeue() if using a class
  ```
- **Time Complexity:** O(1) (amortized for array implementation)
- **Space Complexity:** O(1)

### 3. Front (Peek)
- **Description:** Return the front element without removing it.
- **Pseudocode:**
  ```
  function front(queue):
      if queue is empty:
          return error
      return queue[queue.front]
  ```
- **Code Snippet:**
  ```js
  queue[0];
  // or queue.front() if using a class
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

### 4. isEmpty
- **Description:** Check if the queue is empty.
- **Pseudocode:**
  ```
  function isEmpty(queue):
      return queue.front > queue.rear
  ```
- **Code Snippet:**
  ```js
  queue.length === 0;
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

## Step-by-Step Example: Enqueue and Dequeue
Given queue = [1, 2, 3], enqueue 4:
1. Add 4 to the end: [1, 2, 3, 4]
2. Dequeue removes 1: [2, 3, 4]

## More Examples
```js
// Print queue elements
function printQueue(queue) {
  console.log(queue.items.join(', '));
}

// Circular queue (basic)
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
```

## Time and Space Complexity Summary
| Operation | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| Enqueue   | O(1)           | O(1)            |
| Dequeue   | O(1)           | O(1)            |
| Front     | O(1)           | O(1)            |
| isEmpty   | O(1)           | O(1)            |
