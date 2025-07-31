// Example 1: Binary Tree Node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Example 2: Inorder Traversal (recursive)
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.value);
  inorder(root.right);
}

// Example 3: Height of a tree
function treeHeight(root) {
  if (!root) return 0;
  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}
