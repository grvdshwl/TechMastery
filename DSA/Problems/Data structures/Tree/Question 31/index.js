//* Serialize and Deserialize Binary Tree

var serialize = function (root) {
  let result = [];

  function dfs(node) {
    if (node === null) {
      result.push("null");
      return;
    }

    result.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return result.join(",");
};

var deserialize = function (data) {
  const array = data.split(",");

  let i = 0;

  function dfs() {
    if (array[i] === "null") {
      i++;
      return null;
    }

    const node = new TreeNode(+array[i]);
    i++;
    node.left = dfs();
    node.right = dfs();
    return node;
  }

  const root = dfs();
  return root;
};
