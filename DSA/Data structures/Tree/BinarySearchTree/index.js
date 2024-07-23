// ===============================
// * Binary Search Queue
// ===============================
// A conceptual data structure combining aspects of a binary search with queue functionality.
// This structure aims to incorporate the principles of a binary search algorithm into a queue,
// potentially leveraging binary search properties for faster search and retrieval within a queue.

const Queue = require("../../Queue/objectImplementaion");

// -------------------------------
// * Implementation Considerations
// -------------------------------
// 1. Maintaining a sorted order within the queue.
// 2. Utilizing binary search techniques for efficient element search and retrieval.
// 3. Ensuring queue properties (FIFO) alongside binary search functionalities.
// 4. File Systems
// 5. Databases and Indexing

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this._insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this._insertNode(root.right, newNode);
      }
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return null;
    } else {
      return this._searchNode(this.root, value);
    }
  }

  _searchNode(root, value) {
    if (root === null) {
      return false;
    }

    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this._searchNode(root.left, value);
    } else {
      return this._searchNode(root.right, value);
    }
  }

  min(root) {
    if (this.isEmpty()) {
      return null;
    } else {
      return this._minValue(root);
    }
  }

  _minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this._minValue(root.left);
    }
  }

  max(root) {
    if (this.isEmpty()) {
      return null;
    } else {
      return this._maxValue(root);
    }
  }

  _maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this._maxValue(root.right);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    if (this.root) {
      const queue = new Queue();
      queue.enqueue(this.root);

      while (queue.size()) {
        const item = queue.dequeue();
        console.log(item.value);
        if (item.left) {
          queue.enqueue(item.left);
        }
        if (item.right) {
          queue.enqueue(item.right);
        }
      }
    }
  }

  height(root) {
    if (!root) {
      return 0;
    } else {
      const leftHeight = this.height(root.left);
      const rightHeight = this.height(root.right);
      const height = Math.max(leftHeight, rightHeight) + 1;
      return height;
    }
  }

  delete(value) {
    if (this.isEmpty()) {
      return null;
    } else {
      this._deleteNode(this.root, value);
    }
  }

  _deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this._deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this._deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }

      if (!root.left) {
        return root.right;
      }

      if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this._deleteNode(root.right, root.value);
    }
    return root;
  }
}
module.exports = BST;

const bst = new BST();
bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(2);
bst.insert(10);
bst.insert(1);

console.log(bst.search(1));
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
console.log("----Pre Order-----");
bst.preOrder(bst.root);
console.log("----In Order-----");
bst.inOrder(bst.root);
console.log("----Post Order-----");
bst.postOrder(bst.root);
console.log("----Level Order-----");

bst.levelOrder();
console.log("----Height----");
console.log(bst.height(bst.root));
bst.delete(5);
console.log("----Level Order-----");

bst.levelOrder();
