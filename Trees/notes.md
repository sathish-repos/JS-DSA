
# Trees

## Description
A tree is a hierarchical data structure consisting of nodes, with a single node as the root. Each node can have zero or more child nodes. Trees are used in file systems, databases, parsing expressions, and more.

## Common Operations

### 1. Inorder Traversal (Binary Tree)
- **Description:** Visit left subtree, root, then right subtree.
- **Pseudocode:**
  ```
  function inorder(node):
      if node is null:
          return
      inorder(node.left)
      print(node.value)
      inorder(node.right)
  ```
- **Code Snippet:**
  ```js
  function inorder(root) {
    if (!root) return;
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
  }
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(h) (h = height)

### 2. Insert (Binary Search Tree)
- **Description:** Insert a value while maintaining BST property.
- **Pseudocode:**
  ```
  function insert(node, value):
      if node is null:
          return new Node(value)
      if value < node.value:
          node.left = insert(node.left, value)
      else:
          node.right = insert(node.right, value)
      return node
  ```
- **Code Snippet:**
  ```js
  function insert(root, value) {
    if (!root) return new TreeNode(value);
    if (value < root.value) root.left = insert(root.left, value);
    else root.right = insert(root.right, value);
    return root;
  }
  ```
- **Time Complexity:** O(h)
- **Space Complexity:** O(h)

### 3. Height of Tree
- **Description:** Find the maximum depth of the tree.
- **Pseudocode:**
  ```
  function height(node):
      if node is null:
          return 0
      return 1 + max(height(node.left), height(node.right))
  ```
- **Code Snippet:**
  ```js
  function treeHeight(root) {
    if (!root) return 0;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
  }
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(h)

## Step-by-Step Example: Inorder Traversal
Given tree:
```
    2
   / \
  1   3
```
1. Traverse left (1)
2. Visit root (2)
3. Traverse right (3)
Result: 1, 2, 3

## More Examples
```js
// Preorder Traversal
function preorder(root) {
  if (!root) return;
  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
}

// Postorder Traversal
function postorder(root) {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.value);
}
```

## Time and Space Complexity Summary
| Operation         | Time Complexity | Space Complexity |
|-------------------|----------------|-----------------|
| Traversal         | O(n)           | O(h)            |
| Insert (BST)      | O(h)           | O(h)            |
| Height            | O(n)           | O(h)            |
