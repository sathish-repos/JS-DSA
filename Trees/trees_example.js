// Tree Example: File system hierarchy
// Real-world use: Representing folders and files

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild(child) {
    this.children.push(child);
  }
}

// Example usage:
const root = new TreeNode('root');
const folderA = new TreeNode('folderA');
const folderB = new TreeNode('folderB');
const file1 = new TreeNode('file1.txt');
const file2 = new TreeNode('file2.txt');
root.addChild(folderA);
root.addChild(folderB);
folderA.addChild(file1);
folderB.addChild(file2);

function printTree(node, indent = '') {
  console.log(indent + node.name);
  node.children.forEach(child => printTree(child, indent + '  '));
}

printTree(root);
