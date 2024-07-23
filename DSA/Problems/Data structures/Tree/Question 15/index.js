// Sum Root to Leaf Numbers
var sumNumbers = function (root) {
  function dfs(node, num) {
    if (node === null) {
      return 0;
    }

    let newValue = num * 10 + node.val;

    if (node.left === null && node.right === null) {
      return newValue;
    }

    return dfs(node.left, newValue) + dfs(node.right, newValue);
  }

  return dfs(root, 0);
};
