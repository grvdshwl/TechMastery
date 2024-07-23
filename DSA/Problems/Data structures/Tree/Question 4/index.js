// 	Path Sum
var hasPathSum = function (root, targetSum) {
  const checkSum = (node, value) => {
    if (node === null) {
      return false;
    }

    let curr = node.val + value;

    if (curr === targetSum && node.left === null && node.right === null) {
      return true;
    } else {
      return checkSum(node.left, curr) || checkSum(node.right, curr);
    }
  };

  return checkSum(root, 0);
};
