//* 	Minimum Distance between BST Nodes
var minDiffInBST = function (root) {
  let min = Infinity;
  let prev = null;

  function dfs(node) {
    if (node) {
      dfs(node.left);

      let currentValue = node.val;
      if (prev !== null) {
        let diff = currentValue - prev;
        min = Math.min(diff, min);
      }
      prev = currentValue;

      dfs(node.right);
    }
  }

  dfs(root);
  return min;
};
