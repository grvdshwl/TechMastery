// ===============================
// * Kruskal's Algorithm Overview
// ===============================
// Kruskal's algorithm finds the minimum spanning tree (MST) in a connected, weighted graph,
// minimizing the total edge weight.

// -------------------------------
// * Algorithm Steps
// -------------------------------
// 1. Sort Edges by Weight:
//    - Arrange all graph edges in ascending order based on their weights.

// 2. Initialize an Empty MST:
//    - Create an empty set to hold the Minimum Spanning Tree.

// 3. Iterate through Edges:
//    - Starting with the smallest weighted edge, consider each edge sequentially.

// 4. Add Edge to MST:
//    - Add the edge to the MST if it doesn’t create a cycle in the current MST.

// 5. Continue Adding Edges:
//    - Repeat the process until all edges are considered or enough edges form a spanning tree.

// -------------------------------
// * Implementation in JavaScript
// -------------------------------
// To implement Kruskal's algorithm in JavaScript:
// - Sort edges by weight.
// - Use the union-find algorithm to check for cycles when adding edges to the MST.

class DisjointSet {
  constructor(size) {
    this.parent = new Array(size).fill(-1);
  }

  find(x) {
    if (this.parent[x] === -1) {
      return x;
    }
    return this.find(this.parent[x]);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
    }
  }
}

function kruskal(graph) {
  const edges = [];
  for (const source in graph) {
    for (const target in graph[source]) {
      edges.push([source, target, graph[source][target]]);
    }
  }

  edges.sort((a, b) => a[2] - b[2]);

  const vertices = Object.keys(graph);
  const disjointSet = new DisjointSet(vertices.length);
  const minimumSpanningTree = [];

  for (const edge of edges) {
    const [source, target, weight] = edge;
    const sourceRoot = disjointSet.find(vertices.indexOf(source));
    const targetRoot = disjointSet.find(vertices.indexOf(target));

    if (sourceRoot !== targetRoot) {
      disjointSet.union(sourceRoot, targetRoot);
      minimumSpanningTree.push(edge);
    }
  }

  return minimumSpanningTree;
}

// Example usage:
const graph = {
  A: { B: 4, H: 8 },
  B: { A: 4, H: 11, C: 8 },
  C: { B: 8, I: 2, D: 7, F: 4 },
  D: { C: 7, F: 14, E: 9 },
  E: { D: 9, F: 10 },
  F: { C: 4, D: 14, E: 10, G: 2 },
  G: { F: 2, I: 6, H: 1 },
  H: { A: 8, B: 11, G: 1, I: 7 },
  I: { C: 2, H: 7, G: 6 },
};

const minimumSpanningTree = kruskal(graph);
console.log("Minimum Spanning Tree (Kruskal's Algorithm):");
console.log(minimumSpanningTree);
