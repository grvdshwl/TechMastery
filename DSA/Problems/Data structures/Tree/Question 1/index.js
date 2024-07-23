// Maximum Depth of Binary Tree

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  const depth = Math.max(leftDepth, rightDepth) + 1;
  return depth;
};
