// Binary Tree Level Order Traversal
var levelOrder = function (root) {
  let result = [];

  if (!root) {
    return result;
  }

  let queue = [root];

  while (queue.length) {
    const size = queue.length;

    let level = [];

    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      level.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    result.push(level);
  }

  return result;
};
