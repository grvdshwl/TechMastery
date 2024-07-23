//* Binary Tree Postorder Traversal
var postorderTraversal = function (root) {
  const result = [];

  function postorder(node) {
    if (node) {
      postorder(node.left);
      postorder(node.right);
      result.push(node.val);
    }
  }

  postorder(root);
  return result;
};
