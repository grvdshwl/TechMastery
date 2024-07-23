//* 	Symmetric Tree
function areEqual(node1, node2) {
  if (node1 === null && node2 === null) {
    return true;
  }

  if (node1 === null || node2 === null || node1.val !== node2.val) {
    return false;
  }

  return areEqual(node1.left, node2.right) && areEqual(node1.right, node2.left);
}
var isSymmetric = function (root) {
  if (root === null) {
    true;
  }

  let leftTree = root.left;
  let rightTree = root.right;

  return areEqual(leftTree, rightTree);
};
