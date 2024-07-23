class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.parent(index).distance > this.heap[index].distance
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    let smallerChildIndex;
    while (this.hasLeftChild(index)) {
      smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index).distance < this.leftChild(index).distance
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index].distance > this.heap[smallerChildIndex].distance) {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

function dijkstra(graph, start) {
  const vertices = Object.keys(graph);
  const distances = {};
  const visited = {};

  vertices.forEach((vertex) => {
    distances[vertex] = Infinity;
    visited[vertex] = false;
  });

  distances[start] = 0;
  const minHeap = new MinHeap();
  minHeap.add({ vertex: start, distance: 0 });

  while (minHeap.peek()) {
    const { vertex: minVertex, distance: minDistance } = minHeap.poll();

    if (!visited[minVertex]) {
      visited[minVertex] = true;

      const neighbors = graph[minVertex];

      for (const neighbor in neighbors) {
        const distance = minDistance + neighbors[neighbor];

        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          minHeap.add({ vertex: neighbor, distance });
        }
      }
    }
  }

  return distances;
}

// Example usage:
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, D: 3 },
  C: { A: 2, D: 1 },
  D: { B: 3, C: 1 },
};

const shortestPaths = dijkstra(graph, "A");
console.log(shortestPaths);
