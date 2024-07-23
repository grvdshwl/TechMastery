//* Right View of Binary Tree
//* Reverse Preorder Traversal
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function rightViewDFS(root) {
  if (!root) return [];

  const rightViewNodes = []; // Array to store the rightmost nodes at each level

  // DFS traversal function
  function dfs(node, level) {
    if (!node) return;

    // If the current level matches the number of right view nodes encountered so far,
    // add the node to the right view nodes array (rightmost node at that level)
    if (level === rightViewNodes.length) {
      rightViewNodes.push(node.val);
    }

    // Traverse right subtree first to ensure rightmost nodes are selected
    dfs(node.right, level + 1);

    // Traverse left subtree
    dfs(node.left, level + 1);
  }

  // Start DFS traversal from the root with level 0
  dfs(root, 0);

  return rightViewNodes;
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

// Finding the right view of the binary tree using DFS
console.log("Right View of Binary Tree (using DFS):", rightViewDFS(root));
