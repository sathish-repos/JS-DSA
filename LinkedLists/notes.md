
# Linked Lists

## Description
A linked list is a linear data structure where each element (node) contains data and a reference (pointer) to the next node in the sequence. Linked lists are useful for dynamic memory allocation and efficient insertions/deletions.

## Types
- **Singly Linked List:** Each node points to the next node.
- **Doubly Linked List:** Each node points to both next and previous nodes.
- **Circular Linked List:** Last node points back to the first node.

## Common Operations

### 1. Insertion at Head
- **Pseudocode:**
  ```
  function insertAtHead(head, value):
      newNode = Node(value)
      newNode.next = head
      head = newNode
      return head
  ```
- **Code Snippet:**
  ```js
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  function insertAtHead(head, value) {
    const newNode = new ListNode(value);
    newNode.next = head;
    return newNode;
  }
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

### 2. Insertion at Tail
- **Pseudocode:**
  ```
  function insertAtTail(head, value):
      newNode = Node(value)
      if head is null:
          head = newNode
      else:
          curr = head
          while curr.next != null:
              curr = curr.next
          curr.next = newNode
      return head
  ```
- **Code Snippet:**
  ```js
  function insertAtTail(head, value) {
    const newNode = new ListNode(value);
    if (!head) return newNode;
    let curr = head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
    return head;
  }
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### 3. Deletion by Value
- **Pseudocode:**
  ```
  function deleteByValue(head, value):
      if head.value == value:
          head = head.next
          return head
      curr = head
      while curr.next != null and curr.next.value != value:
          curr = curr.next
      if curr.next != null:
          curr.next = curr.next.next
      return head
  ```
- **Code Snippet:**
  ```js
  function deleteByValue(head, value) {
    if (!head) return null;
    if (head.value === value) return head.next;
    let curr = head;
    while (curr.next && curr.next.value !== value) {
      curr = curr.next;
    }
    if (curr.next) curr.next = curr.next.next;
    return head;
  }
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### 4. Traversal
- **Pseudocode:**
  ```
  function traverse(head):
      curr = head
      while curr != null:
          print(curr.value)
          curr = curr.next
  ```
- **Code Snippet:**
  ```js
  function printList(head) {
    let curr = head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Step-by-Step Example: Insertion at Head
1. Create a new node with the value.
2. Set new node's next to current head.
3. Update head to new node.

## More Examples
```js
// Count nodes in a linked list
function countNodes(head) {
  let count = 0, curr = head;
  while (curr) {
    count++;
    curr = curr.next;
  }
  return count;
}

// Search for a value
function search(head, target) {
  let curr = head;
  while (curr) {
    if (curr.value === target) return true;
    curr = curr.next;
  }
  return false;
}
```

## Time and Space Complexity Summary
| Operation         | Time Complexity | Space Complexity |
|-------------------|----------------|-----------------|
| Insert at Head    | O(1)           | O(1)            |
| Insert at Tail    | O(n)           | O(1)            |
| Deletion by Value | O(n)           | O(1)            |
| Traversal         | O(n)           | O(1)            |
