class Edge {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

function bellmanFord(vertices, edges, source) {
  const distances = {};
  for (let vertex of vertices) {
    distances[vertex] = Infinity;
  }
  distances[source] = 0;

  for (let i = 0; i < vertices.length - 1; i++) {
    let anyUpdate = false;
    for (let j = 0; j < edges.length; j++) {
      const { source: u, destination: v, weight } = edges[j];
      if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
        distances[v] = distances[u] + weight;
        anyUpdate = true;
      }
    }
    if (!anyUpdate) break; // If no updates, no need to continue
  }

  for (let i = 0; i < edges.length; i++) {
    const { source: u, destination: v, weight } = edges[i];
    if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
      console.log("Graph contains negative cycle");
      return null;
    }
  }

  return distances;
}

// Example usage:
const vertices = ["A", "B", "C", "D", "E"];
const edges = [
  new Edge("A", "B", 4),
  new Edge("A", "C", 2),
  new Edge("B", "D", 5),
  new Edge("C", "B", -3),
  new Edge("C", "D", 4),
  new Edge("D", "E", 2),
  new Edge("E", "C", 1),
];

const sourceVertex = "A";
const shortestPaths = bellmanFord(vertices, edges, sourceVertex);
console.log(shortestPaths);
