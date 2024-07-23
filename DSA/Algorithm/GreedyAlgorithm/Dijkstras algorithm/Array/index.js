// ===============================
// * Dijkstra's Algorithm Overview
// ===============================
// Dijkstra's algorithm finds the shortest path from a starting node to all other nodes in a
// graph with non-negative edge weights.

// -------------------------------
// * Algorithm Steps
// -------------------------------
// 1. Start at the Source Node:
//    - Begin with the starting node, setting its distance from itself to 0.
//    - Set distances of all other nodes to 'infinity' initially.

// 2. Explore Neighbors:
//    - Explore neighbors of the current node, updating their distances if a shorter path is found
//     through the current node.

// 3. Choose the Closest Unvisited Node:
//    - Among unvisited nodes, choose the one with the smallest distance and mark it as visited.

// 4. Repeat Until All Nodes are Visited:
//    - Repeat steps 2 and 3 until all nodes are visited or until the shortest path to desired
//      nodes is found.

function dijkstra(graph, start) {
  const numVertices = graph.length;
  const distances = Array(numVertices).fill(Infinity);
  const visited = Array(numVertices).fill(false);

  distances[start] = 0;
  for (let i = 0; i < numVertices - 1; i++) {
    const minDistanceIndex = findMinDistance(distances, visited);
    visited[minDistanceIndex] = true;

    for (let j = 0; j < numVertices; j++) {
      if (
        !visited[j] &&
        graph[minDistanceIndex][j] !== 0 &&
        distances[minDistanceIndex] !== Infinity &&
        distances[minDistanceIndex] + graph[minDistanceIndex][j] < distances[j]
      ) {
        distances[j] = distances[minDistanceIndex] + graph[minDistanceIndex][j];
      }
    }
  }

  return distances;
}

function findMinDistance(distances, visited) {
  let min = Infinity;
  let minIndex = -1;

  for (let i = 0; i < distances.length; i++) {
    if (!visited[i] && distances[i] <= min) {
      min = distances[i];
      minIndex = i;
    }
  }

  return minIndex;
}
const simpleGraph = [
  [0, 3, 2, 0], // A
  [3, 0, 0, 4], // B
  [2, 0, 0, 1], // C
  [0, 4, 1, 0], // D
];
// Example usage:
const graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0], // Node A (0)
  [4, 0, 8, 0, 0, 0, 0, 11, 0], // Node B (1)
  [0, 8, 0, 7, 0, 4, 0, 0, 2], // Node C (2)
  [0, 0, 7, 0, 9, 14, 0, 0, 0], // Node D (3)
  [0, 0, 0, 9, 0, 10, 0, 0, 0], // Node E (4)
  [0, 0, 4, 14, 10, 0, 2, 0, 0], // Node F (5)
  [0, 0, 0, 0, 0, 2, 0, 1, 6], // Node G (6)
  [8, 11, 0, 0, 0, 0, 1, 0, 7], // Node H (7)
  [0, 0, 2, 0, 0, 0, 6, 7, 0], // Node I (8)
];
// const shortestPaths = dijkstra(graph, 0);

// (A)---3---(B)
// /         /
// 2         4
// /         /
// (C)---1---(D)

const shortestPathsSimpleGraph = dijkstra(simpleGraph, 0);

console.log(shortestPathsSimpleGraph);
