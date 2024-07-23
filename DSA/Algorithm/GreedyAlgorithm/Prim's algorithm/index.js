// ===============================
// * Prim's Algorithm Overview
// ===============================
// Prim's algorithm finds the minimum spanning tree (MST) in a connected, weighted graph,
// employing a different approach than Kruskal's algorithm.

// -------------------------------
// * Algorithm Steps
// -------------------------------
// 1. Start with a Random Node:
//    - Begin with an arbitrary node as the starting point for the MST.

// 2. Grow the MST:
//    - Add the nearest edge from the included vertices to expand the MST.

// 3. Select the Smallest Edge:
//    - Continuously choose the smallest edge connecting the MST to vertices outside it.

// 4. Repeat until MST is Formed:
//    - Keep adding edges until all vertices are included in the MST.

// -------------------------------
// * Core Idea
// -------------------------------
// Grow the MST from an initial vertex by always selecting the smallest edge connecting the
// existing MST to a new vertex.

function primsMST(graph) {
  const numVertices = graph.length;
  const parent = Array(numVertices).fill(-1); // To store the parent of each vertex in the MST
  const key = Array(numVertices).fill(Infinity); // To store the key value to pick minimum weight edge

  key[0] = 0; // Start with the first vertex

  const mstSet = Array(numVertices).fill(false); // To track vertices included in the MST

  for (let count = 0; count < numVertices - 1; count++) {
    const u = minKey(key, mstSet);
    mstSet[u] = true;

    for (let v = 0; v < numVertices; v++) {
      if (graph[u][v] !== 0 && !mstSet[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }

  const mst = [];
  for (let i = 1; i < numVertices; i++) {
    mst.push({ src: parent[i], dest: i, weight: graph[i][parent[i]] });
  }

  return mst;
}

function minKey(key, mstSet) {
  let min = Infinity;
  let minIndex = -1;

  for (let v = 0; v < key.length; v++) {
    if (!mstSet[v] && key[v] < min) {
      min = key[v];
      minIndex = v;
    }
  }

  return minIndex;
}

// Example usage:
const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0],
];

const minimumSpanningTree = primsMST(graph);
console.log(minimumSpanningTree);
