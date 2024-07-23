//* 	Construct String From Binary Tree
var tree2str = function (root) {
  let result = [];

  function preorder(root) {
    if (root === null) {
      return;
    }
    result.push("(");
    result.push(String(root.val));
    if (root.left === null && root.right) {
      result.push("()");
    }
    preorder(root.left);
    preorder(root.right);
    result.push(")");
  }
  preorder(root);

  return result.slice(1, result.length - 1).join("");
};
