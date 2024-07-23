//* Binary Tree Maximum Path Sum

var maxPathSum = function (root) {
  let max = -Infinity;
  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    const maxValPath = Math.max(node.val, node.val + left, node.val + right);

    max = Math.max(max, left + right + node.val, maxValPath);

    return maxValPath;
  }

  dfs(root);

  return max;
};
