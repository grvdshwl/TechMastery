// Vertical Order Traversal Of Binary Tree
var verticalTraversal = function (root) {
  if (!root) return [];

  let map = {};

  let queue = [[root, 0, 0]]; // Queue format: [node, hd, level]

  while (queue.length) {
    const [node, hd, level] = queue.shift();

    if (!map[hd]) {
      map[hd] = [];
    }
    map[hd].push({ val: node.val, level: level });

    if (node.left) {
      queue.push([node.left, hd - 1, level + 1]);
    }
    if (node.right) {
      queue.push([node.right, hd + 1, level + 1]);
    }
  }

  let hds = Object.keys(map).sort((a, b) => a - b);

  let verticalResult = [];

  for (let hd of hds) {
    let nodes = map[hd];
    nodes.sort((a, b) => {
      if (a.level !== b.level) return a.level - b.level; // Sort by level number first
      return a.val - b.val; // If level numbers are equal, sort by node value
    });
    verticalResult.push(nodes.map((node) => node.val));
  }

  return verticalResult;
};
