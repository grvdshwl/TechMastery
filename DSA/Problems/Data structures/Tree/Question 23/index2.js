//* 	Insert into a Binary Search Tree
var insertIntoBST = function (root, val) {
  const node = new TreeNode(val);
  if (root == null) return node;
  else {
    insertNode(root, node);
    return root;
  }
};

function insertNode(root, node) {
  if (node.val < root.val) {
    if (root.left == null) root.left = node;
    else insertNode(root.left, node);
  } else {
    if (root.right == null) root.right = node;
    else insertNode(root.right, node);
  }
  return root;
}
