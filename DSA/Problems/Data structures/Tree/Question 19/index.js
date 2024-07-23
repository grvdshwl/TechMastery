// Left View Of Binary Tree
//* Preorder Traversal

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function leftViewDFS(root) {
  if (!root) return [];

  const leftViewNodes = []; // Array to store the leftmost nodes at each level

  // DFS traversal function
  function dfs(node, level) {
    if (!node) return;

    // If the current level matches the number of left view nodes encountered so far,
    // add the node to the left view nodes array (leftmost node at that level)
    if (level === leftViewNodes.length) {
      leftViewNodes.push(node.val);
    }

    // Traverse left subtree first to ensure leftmost nodes are selected
    dfs(node.left, level + 1);

    // Traverse right subtree
    dfs(node.right, level + 1);
  }

  // Start DFS traversal from the root with level 0
  dfs(root, 0);

  return leftViewNodes;
}

// Example usage:
// Constructing a sample binary tree
//       1
//     /   \
//    2     3
//     \
//      4
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(4);

// Finding the left view of the binary tree using DFS
console.log("Left View of Binary Tree (using DFS):", leftViewDFS(root));
