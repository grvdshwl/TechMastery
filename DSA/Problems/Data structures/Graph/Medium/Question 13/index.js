//* Graph Valid Tree
class Solution {
  constructor() {
    this.adjacencyList = new Map();
  }

  validTree(n, edges) {
    this.adjacencyList.clear();

    if (n == 1) return edges.length == 0;

    if (edges.length == 0) return false;

    for (let edge of edges) {
      let node1 = edge[0];
      let node2 = edge[1];
      if (!this.adjacencyList.has(node1)) this.adjacencyList.set(node1, []);
      if (!this.adjacencyList.has(node2)) this.adjacencyList.set(node2, []);
      this.adjacencyList.get(node1).push(node2);
      this.adjacencyList.get(node2).push(node1);
    }

    let visited = new Set();

    let isNotCircular = this.depthFirstSearch(0, -1, visited);

    return isNotCircular && visited.size === n;
  }

  depthFirstSearch(node, previous, visited) {
    if (visited.has(node)) return false;

    visited.add(node);

    for (let neighbor of this.adjacencyList.get(node)) {
      if (neighbor === previous) continue;

      if (!this.depthFirstSearch(neighbor, node, visited)) return false;
    }

    return true;
  }
}
