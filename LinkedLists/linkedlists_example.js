// Linked List Example: Browser history navigation
// Real-world use: Navigating back and forward in browser history

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  printForward() {
    let curr = this.head;
    while (curr) {
      process.stdout.write(curr.data + ' ');
      curr = curr.next;
    }
    console.log();
  }

  printBackward() {
    let curr = this.tail;
    while (curr) {
      process.stdout.write(curr.data + ' ');
      curr = curr.prev;
    }
    console.log();
  }
}

// Example usage:
const history = new DoublyLinkedList();
history.append('google.com');
history.append('github.com');
history.append('stackoverflow.com');
history.printForward(); // google.com github.com stackoverflow.com
history.printBackward(); // stackoverflow.com github.com google.com
