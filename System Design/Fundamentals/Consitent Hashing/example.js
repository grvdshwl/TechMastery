// Simple hash function to convert a string to a numerical value
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Class to represent the consistent hashing ring
class ConsistentHashing {
  constructor() {
    this.ring = [];
    this.nodes = new Map(); // To keep track of nodes and their positions
  }

  // Add a node to the ring
  addNode(node) {
    const position = hashString(node);
    this.ring.push(position);
    this.nodes.set(position, node);
    this.ring.sort((a, b) => a - b); // Keep the ring sorted
  }

  // Remove a node from the ring
  removeNode(node) {
    const position = hashString(node);
    const index = this.ring.indexOf(position);
    if (index !== -1) {
      this.ring.splice(index, 1);
      this.nodes.delete(position);
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
const ch = new ConsistentHashing();

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

console.log("Node for Key1:", ch.getNode("Key1"));
console.log("Node for Key2:", ch.getNode("Key2"));
console.log("Node for Key3:", ch.getNode("Key3"));
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
