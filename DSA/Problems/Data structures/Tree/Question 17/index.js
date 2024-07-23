// Top View Of Binary Tree
// Definition for a binary tree node.
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function topView(root) {
  if (!root) return [];

  const topViewMap = {};

  const queue = [[root, 0]];

  while (queue.length) {
    const [node, level] = queue.shift();

    if (!topViewMap[level]) {
      topViewMap[level] = node.val;
    }

    if (node.left) {
      queue.push([node.left, level - 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }

  const topViewNodes = [];
  for (const level of Object.keys(topViewMap).sort((a, b) => a - b)) {
    topViewNodes.push(topViewMap[level]);
  }

  return topViewNodes;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(4);

console.log(
  "Top View of Binary Tree (using Level Order Traversal):",
  topView(root),
);
