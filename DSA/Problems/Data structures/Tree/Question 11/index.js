// Lowest Common Ancestor of BST

var lowestCommonAncestor = function (root, p, q) {
  let current = root;

  while (current) {
    let value = current.val;
    if (p.val < value && q.val < value) {
      current = current.left;
    } else if (p.val > value && q.val > value) {
      current = current.right;
    } else {
      return current;
    }
  }
};
