// Example 1: Singly Linked List Node
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Example 2: Insert at head
function insertAtHead(head, value) {
  const newNode = new ListNode(value);
  newNode.next = head;
  return newNode;
}

// Example 3: Print all nodes
function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}
