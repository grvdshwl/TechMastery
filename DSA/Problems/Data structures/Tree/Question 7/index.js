// Subtree of Another Tree
const areEqual = (node1, node2) => {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;

  if (node1.val !== node2.val) return false;
  return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right);
};

const isSubtree = (root, subRoot) => {
  const queue = [root];
  while (queue.length) {
    const node = queue.pop();

    if (areEqual(node, subRoot)) return true;

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
  return false;
};
