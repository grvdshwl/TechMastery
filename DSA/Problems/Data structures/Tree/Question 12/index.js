// 	Balanced Binary Tree
const height = (node) => {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(height(node.left), height(node.right));
};

var isBalanced = function (root) {
  if (root === null) {
    return true;
  } else {
    let diff = Math.abs(height(root.left) - height(root.right));
    return diff < 2 && isBalanced(root.left) && isBalanced(root.right);
  }
};
