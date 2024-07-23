//*  Number of Connected Components In An Undirected Graph - Easy Solution
function countComponents(n, edges) {
  const adj = {};

  // Populate adjacency list
  for (const [src, dst] of edges) {
    adj[src] = adj[src] || [];
    adj[dst] = adj[dst] || [];
    adj[src].push(dst);
    adj[dst].push(src);
  }

  const visited = new Set();
  let componentsCount = 0;

  // Depth-first search
  function dfs(node) {
    visited.add(node);
    let children = adj[node];
    if (children) {
      for (const child of children) {
        if (!visited.has(child)) {
          dfs(child);
        }
      }
    }
  }

  // Traverse each node
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      componentsCount++;
    }
  }
  return componentsCount;
}

const n = 6;
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [4, 5],
];
console.log(countComponents(n, edges));
