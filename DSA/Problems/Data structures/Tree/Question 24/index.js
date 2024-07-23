//* Binary Tree Inorder Traversal

var inorderTraversal = function (root) {
  const result = [];

  function inorder(node) {
    if (node) {
      inorder(node.left);
      result.push(node.val);
      inorder(node.right);
    }
  }

  inorder(root);
  return result;
};
