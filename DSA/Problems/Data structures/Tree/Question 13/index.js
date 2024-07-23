// Diameter Of Binary Tree

var diameterOfBinaryTree = function (root) {
  let max = 0;
  const getHeight = (root) => {
    if (!root) {
      return 0;
    }
    const left = getHeight(root.left);
    const right = getHeight(root.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  };
  const d = getHeight(root.left) + getHeight(root.right);
  return Math.max(d, max);
};
