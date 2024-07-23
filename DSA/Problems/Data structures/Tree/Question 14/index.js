// ZigZar Order Traversal Binary Tree

var zigzagLevelOrder = function (root) {
  // handle edge case
  if (!root) return [];

  // create res and queue, and level size
  const res = [],
    queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    let levelSize = queue.length;
    const levelVals = [];

    while (levelSize > 0) {
      const currNode = queue.shift();
      if (leftToRight) levelVals.push(currNode.val);
      else levelVals.unshift(currNode.val);

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
      levelSize--;
    }
    leftToRight = !leftToRight;
    res.push(levelVals);
  }
  return res;
};
