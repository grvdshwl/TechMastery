//* Merge Two Binary Trees
var mergeTrees = function (root1, root2) {
  //base cases
  if (!root1 && !root2) return null;

  if (!root1) return root2;
  if (!root2) return root1;

  //we create a new node tree by combining the two trees
  const mergedNode = new TreeNode(root1.val + root2.val);
  //we recursively call it to the left
  mergedNode.left = mergeTrees(root1.left, root2.left);
  //and the right
  mergedNode.right = mergeTrees(root1.right, root2.right);

  //we return the result of the merged trees
  return mergedNode;
};
