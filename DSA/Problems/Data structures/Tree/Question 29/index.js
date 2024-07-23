//* 	Convert BST to Greater Tree
var convertBST = function (root) {
  let sum = 0;
  function inorder(root) {
    if (root === null) {
      return;
    }
    inorder(root.right);
    sum += root.val;
    root.val = sum;
    inorder(root.left);
  }

  inorder(root);
  return root;
};
