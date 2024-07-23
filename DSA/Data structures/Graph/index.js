// ===============================
//* Graph Overview
// ===============================
// A graph is a non-linear data structure consisting of a set of nodes (vertices)
// and connections between them (edges). It's a versatile model used to represent
// relationships between various entities.

// -------------------------------
//* Graph Definition
// -------------------------------
// In computer science, a graph is a collection of nodes (vertices) interconnected by
// edges. Nodes represent entities, and edges depict relationships or connections
// between these entities.

// -------------------------------
//* Simple Explanation
// -------------------------------
// Think of a graph as a network of cities connected by roads. The cities are nodes,
// and roads between them are edges. It's like a map where cities are points, and roads
// show how these points are linked. Graphs are used to model real-world networks,
// relationships, social connections, and much more.

//* Implementation
//  1. Navigation Systems (Maps)
//  2. Social Network Analysis

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}
module.exports = Graph;
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.display();
graph.removeEdge("A", "B");
graph.display();
graph.removeVertex("A");
graph.display();
module.exports = Graph;
