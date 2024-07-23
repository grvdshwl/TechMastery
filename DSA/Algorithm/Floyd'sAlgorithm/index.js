// ===============================
// * Floyd's Algorithm Overview
// ===============================
// Floyd's algorithm computes the shortest paths between all pairs of vertices in a weighted
// graph.

// -------------------------------
// * Algorithm Steps
// -------------------------------
// 1. Initialize the Distance Matrix:
//    - Create a matrix representing shortest distances between vertices.
//    - Set direct edge weights between connected vertices and 'infinity' for unconnected vertices.

// 2. Iterate Through Vertices:
//    - Consider each vertex as an intermediate point to improve existing shortest paths.

// 3. Update the Distance Matrix:
//    - Check if going through an intermediate vertex shortens the path between pairs.
//    - Update the shortest distance accordingly.

// 4. Repeat Until Paths Are Checked:
//    - Iterate and update until all vertices are considered as intermediates.
//    - Ensure shortest paths between all vertex pairs are found.

function floydWarshall(graph) {
  const numVertices = graph.length;
  const dist = [];

  // Initialize the distance matrix with the given graph
  for (let i = 0; i < numVertices; i++) {
    dist[i] = [];
    for (let j = 0; j < numVertices; j++) {
      if (i === j) {
        dist[i][j] = 0; // Distance to itself is 0
      } else if (graph[i][j] === 0 || !graph[i][j]) {
        dist[i][j] = Infinity; // If there's no direct edge, set distance to Infinity
      } else {
        dist[i][j] = graph[i][j]; // Set distance to the edge weight
      }
    }
  }

  // Calculate shortest paths using dynamic programming
  for (let k = 0; k < numVertices; k++) {
    for (let i = 0; i < numVertices; i++) {
      for (let j = 0; j < numVertices; j++) {
        if (
          dist[i][k] !== Infinity &&
          dist[k][j] !== Infinity &&
          dist[i][k] + dist[k][j] < dist[i][j]
        ) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// Example usage:
const graph = [
  [0, 3, 0, 7],
  [8, 0, 2, 0],
  [5, 0, 0, 1],
  [2, 0, 0, 0],
];

const shortestPaths = floydWarshall(graph);
console.log(shortestPaths);
