//* Check Completeness of a Binary Tree

//* BFS

var isCompleteTree = function (root) {
  let queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    } else {
      while (queue.length) {
        const node = queue.shift();
        if (node) {
          return false;
        }
      }
    }
  }

  return true;
};
