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
      return false;
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

  min() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this._minValue(this.root);
    }
  }

  _minValue(root) {
    if (root.left) {
      return this._minValue(root.left);
    } else {
      return root.value;
    }
  }

  max() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this._maxValue(this.root);
    }
  }

  _maxValue(root) {
    if (root.right) {
      return this._maxValue(root.right);
    } else {
      return root.value;
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
    const queue = [];

    queue.push(this.root);

    while (queue.length) {
      const item = queue.shift();
      console.log(item.value);
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }
  }

  height() {
    if (this.isEmpty()) {
      return 0;
    } else {
      return this._getHeight(this.root);
    }
  }

  _getHeight(root) {
    if (root === null) {
      return 0;
    }
    const leftHeight = this._getHeight(root.left);
    const rightHeight = this._getHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
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
    if (root.value === value) {
      if (!root.left && !root.right) {
        return null;
      }
      if (root.left && !root.right) {
        return root.left;
      }
      if (root.right && !root.left) {
        return root.right;
      }

      root.value = this.min(root.right);
      root.right = this._deleteNode(root.right, root.value);
    } else if (value < root.value) {
      root.left = this._deleteNode(root.left, value);
    } else {
      root.right = this._deleteNode(root.right, value);
    }
    return root;
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(7);
bst.insert(15);
bst.insert(9);
bst.insert(11);
bst.insert(3);
bst.insert(1);
