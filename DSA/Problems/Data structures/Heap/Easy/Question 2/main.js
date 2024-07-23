//* Last Stone Weight
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  get length() {
    return this.heap.length;
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
    return this.getLeftChildIndex(index) < this.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.length;
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
    return this.length === 0 ? null : this.heap[0];
  }

  poll() {
    if (this.length === 0) return null;

    const item = this.heap[0];
    const lastItem = this.heap.pop();
    if (this.length > 0) {
      this.heap[0] = lastItem;
      this.heapifyDown();
    }
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let largerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        largerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[largerChildIndex]) {
        this.swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }
}

const lastStoneWeight = (stones) => {
  const maxHeap = new MaxHeap();
  stones.forEach((stone) => maxHeap.add(stone));

  while (maxHeap.length > 1) {
    const stone1 = maxHeap.poll();
    const stone2 = maxHeap.poll();
    const diff = Math.abs(stone1 - stone2);
    if (diff > 0) {
      maxHeap.add(diff);
    }
  }

  maxHeap.add(0);
  return maxHeap.poll();
};
