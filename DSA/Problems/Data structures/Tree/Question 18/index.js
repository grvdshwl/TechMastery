//
//* 	Find Duplicate Subtrees
var findDuplicateSubtrees = function (root) {
  const result = [];

  let map = {};
  const preOrder = (node) => {
    if (node === null) {
      return null;
    }

    let s = [node.val, preOrder(node.left), preOrder(node.right)].join(",");

    if (map[s] === 1) {
      result.push(node);
    }

    map[s] = (map[s] || 0) + 1;
    return s;
  };

  preOrder(root);

  return result;
};
