// ========================
//* Directed Acyclic Graph
// ========================
// A Directed Acyclic Graph (DAG) is a type of graph data structure
// where edges between nodes have a specific direction and do not form any cycles.
// It's a graph with directed edges that never lead to a loop.

// -----------------------
//* DAG Overview
// -----------------------
// A DAG is a collection of nodes connected by edges, where connections
// only go one way and never form a cycle. Think of it like a flowchart
// for a task that shows the steps needed to complete it without going
// in circles or repeating steps. It's useful for representing dependencies
// or sequences where each step relies on previous ones without creating loops.

//Applications
//1. Family Tree
//2. Package manager for managing dependcies
//3. Circuit Design.
//4.DBMS

class DAGNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class DAG {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const newNode = new DAGNode(value);
    this.nodes.push(newNode);
    return newNode;
  }

  addEdge(fromNode, toNode) {
    fromNode.children.push(toNode);
  }

  // Topological Sorting (DFS-based)
  topologicalSort() {
    const visited = new Set();
    const result = [];
    const visit = (node) => {
      visited.add(node);
      node.children.forEach((child) => {
        if (!visited.has(child)) {
          visit(child);
        }
      });
      result.unshift(node.value);

      // Adding node to the beginning for topological order
    };

    this.nodes.forEach((node) => {
      if (!visited.has(node)) {
        visit(node);
      }
    });

    return result;
  }
}

// Example Usage:
const dag = new DAG();
const node1 = dag.addNode("A");
const node2 = dag.addNode("B");
const node3 = dag.addNode("C");
const node4 = dag.addNode("D");
const node5 = dag.addNode("E");

dag.addEdge(node1, node2);
dag.addEdge(node1, node3);
dag.addEdge(node2, node4);
dag.addEdge(node3, node4);
dag.addEdge(node4, node5);

const topologicalOrder = dag.topologicalSort();
console.log("Topological Order:", topologicalOrder); // Output: ["A", "C", "B", "D"]
const myDAG = new DAG();

// Adding nodes to the DAG
const task1 = myDAG.addNode("Task 1");
const task2 = myDAG.addNode("Task 2");
const task3 = myDAG.addNode("Task 3");
const task4 = myDAG.addNode("Task 4");
const task5 = myDAG.addNode("Task 5");

// Establishing dependencies between tasks
myDAG.addEdge(task1, task2);
myDAG.addEdge(task1, task3);
myDAG.addEdge(task2, task4);
myDAG.addEdge(task3, task4);
myDAG.addEdge(task4, task5);
const topologicalOrder2 = myDAG.topologicalSort();

console.log("Topological Order:", topologicalOrder2); // Output: ["A", "C", "B", "D"]

module.exports = DAG;
