// ===============================
// * Red-Black Trees Overview
// ===============================
// Red-Black Trees are self-balancing binary search trees. Nodes in this structure
// possess an extra attribute, often termed "color," maintaining balance through
// specific rules. They ensure the tree remains approximately balanced, enabling
// efficient insertion, deletion, and search operations.

// -------------------------------
// * Red-Black Trees Details
// -------------------------------
// Red-Black Trees act as specialized binary search trees designed for balance.
// Each node is marked red or black, adhering to rules that preserve balance during
// insertion and deletion. These rules guarantee that the longest root-to-leaf path
// is at most twice the length of the shortest path—a mechanism akin to arranging
// books on a shelf to maintain overall balance.

// ===============================
// Node Class for Red-Black Trees
// ===============================
// Define the node class responsible for representing individual nodes within
// the Red-Black Tree structure.

class Node {
  constructor(value, color) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color; // Red or black
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
    this.BLACK = "black";
    this.RED = "red";
  }

  // Helper function to perform left rotation
  leftRotate(node) {
    const rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  // Helper function to perform right rotation
  rightRotate(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  // Helper function to fix Red-Black Tree properties after insertion
  fixInsertion(node) {
    while (node !== this.root && node.parent.color === this.RED) {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle !== null && uncle.color === this.RED) {
          node.parent.color = this.BLACK;
          uncle.color = this.BLACK;
          node.parent.parent.color = this.RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }
          node.parent.color = this.BLACK;
          node.parent.parent.color = this.RED;
          this.rightRotate(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        if (uncle !== null && uncle.color === this.RED) {
          node.parent.color = this.BLACK;
          uncle.color = this.BLACK;
          node.parent.parent.color = this.RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }
          node.parent.color = this.BLACK;
          node.parent.parent.color = this.RED;
          this.leftRotate(node.parent.parent);
        }
      }
    }
    this.root.color = this.BLACK;
  }

  // Insertion method for Red-Black Tree
  insert(value) {
    const newNode = new Node(value, this.RED);
    let parent = null;
    let current = this.root;

    while (current !== null) {
      parent = current;
      if (newNode.value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;
    if (parent === null) {
      this.root = newNode;
    } else if (newNode.value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    this.fixInsertion(newNode);
  }
}
