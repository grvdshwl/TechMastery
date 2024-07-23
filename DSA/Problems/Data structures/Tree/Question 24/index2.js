//* Binary Tree Preorder Traversal
var preorderTraversal = function (root) {
  const result = [];

  function preorder(node) {
    if (node) {
      result.push(node.val);

      preorder(node.left);
      preorder(node.right);
    }
  }

  preorder(root);
  return result;
};
