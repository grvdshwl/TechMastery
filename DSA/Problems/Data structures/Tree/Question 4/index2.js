//* Path Sum II
var pathSum = function (root, targetSum) {
  let result = [];
  const checkSum = (node, sum, res) => {
    if (node === null) {
      return;
    }

    sum += node.val;
    res.push(node.val);

    if (node.left === null && node.right === null && targetSum === sum) {
      result.push([...res]);

      return;
    }
    checkSum(node.left, sum, [...res]);

    checkSum(node.right, sum, [...res]);
  };

  checkSum(root, 0, []);

  return result;
};
