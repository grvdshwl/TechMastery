//*Count Good Nodes In Binary Tree
var goodNodes = function (root) {
  let count = 0;
  const dfs = (node, max) => {
    if (node.val >= max) {
      count++;
    }
    let nextMax = Math.max(node.val, max);
    if (node.left) {
      dfs(node.left, nextMax);
    }

    if (node.right) {
      dfs(node.right, nextMax);
    }
  };
  dfs(root, -Infinity);
  return count;
};
