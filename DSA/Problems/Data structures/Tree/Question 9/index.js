// Validate Binary Search Tree

var isValidBST = function (root) {
  const isValid = (node, left, right) => {
    if (node === null) {
      return true;
    }

    let value = node.val;

    if (!(value < right && value > left)) {
      return false;
    }

    return isValid(node.left, left, value) && isValid(node.right, value, right);
  };

  return isValid(root, -Infinity, Infinity);
};
