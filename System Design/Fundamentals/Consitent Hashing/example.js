// Simple hash function to convert a string to a numerical value
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
  }
  return Math.abs(hash);
}

// Class to represent the consistent hashing ring with virtual nodes
class ConsistentHashing {
  constructor(virtualNodes = 3) {
    this.virtualNodes = virtualNodes; // Number of virtual nodes per physical node
    this.ring = [];
    this.nodes = new Map(); // To keep track of virtual nodes and their corresponding physical nodes
  }

  // Add a node to the ring with virtual nodes
  addNode(node) {
    for (let i = 0; i < this.virtualNodes; i++) {
      const vnodeId = `${node}#${i}`;
      const position = hashString(vnodeId);
      this.ring.push(position);
      this.nodes.set(position, node);
    }
    this.ring.sort((a, b) => a - b); // Keep the ring sorted
  }

  // Remove a node and its virtual nodes from the ring
  removeNode(node) {
    for (let i = 0; i < this.virtualNodes; i++) {
      const vnodeId = `${node}#${i}`;
      const position = hashString(vnodeId);
      const index = this.ring.indexOf(position);
      if (index !== -1) {
        this.ring.splice(index, 1);
        this.nodes.delete(position);
      }
    }
  }

  // Get the node responsible for a given key
  getNode(key) {
    const position = hashString(key);
    for (let pos of this.ring) {
      if (position <= pos) {
        return this.nodes.get(pos);
      }
    }
    // If no position is greater, return the first node in the ring
    return this.nodes.get(this.ring[0]);
  }
}

// Example usage
const ch = new ConsistentHashing(5); // Using 5 virtual nodes per physical node

// Add nodes to the ring
ch.addNode("NodeA");
ch.addNode("NodeB");
ch.addNode("NodeC");

console.log(
  "Initial Ring:",
  ch.ring.map((pos) => ch.nodes.get(pos))
);

// Get nodes responsible for keys
console.log("Node for Key1:", ch.getNode("Key1"));
console.log("Node for Key2:", ch.getNode("Key2"));
console.log("Node for Key3:", ch.getNode("Key3"));

// Add a new node
ch.addNode("NodeD");
console.log(
  "Ring after adding NodeD:",
  ch.ring.map((pos) => ch.nodes.get(pos))
);

// Remove a node
ch.removeNode("NodeB");
console.log(
  "Ring after removing NodeB:",
  ch.ring.map((pos) => ch.nodes.get(pos))
);

// Get nodes responsible for keys after changes
console.log("Node for Key1 after changes:", ch.getNode("Key1"));
console.log("Node for Key2 after changes:", ch.getNode("Key2"));
console.log("Node for Key3 after changes:", ch.getNode("Key3"));
