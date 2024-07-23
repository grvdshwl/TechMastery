// House of robber 3
var rob = function (root) {
  function dfs(root) {
    if (root === null) {
      return [0, 0];
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    let withRoot = root.val + left[1] + right[1];
    let withoutRoot = Math.max(...left) + Math.max(...right);

    return [withRoot, withoutRoot];
  }
  return Math.max(...dfs(root));
};
