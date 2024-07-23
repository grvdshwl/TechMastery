// Kth Smallest Element in a BST

var kthSmallest = function (root, k) {
  let res = [];

  function inOrder(node) {
    if (node) {
      inOrder(node.left);
      res.push(node.val);
      inOrder(node.right);
    }
  }

  inOrder(root);

  return res[k - 1];
};
