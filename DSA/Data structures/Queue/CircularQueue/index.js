// =========================
//* Circular Queue Overview
// =========================
// Circular Queue, also known as a circular buffer or ring buffer, is a fixed-size
// queue where a single block of memory behaves as if the first element is connected
// to the last element. It adheres to the FIFO (First In, First Out) principle.
//
// It efficiently reuses empty blocks created during dequeue operations, making it
// a favorable choice for working with queues of a fixed maximum size. This
// implementation ensures optimal memory usage and effective management of elements.
//
// Two Primary Operations:
// - Enqueue: Adds an element to the rear/tail of the collection.
// - Dequeue: Removes an element from the front/head of the collection.

// ===============================
//* Applications of Circular Queues
// ===============================
// Circular queues find applications in various real-world scenarios:
// - Clock: Used in scheduling algorithms and simulations where time loops in a
//   circular fashion.
// - Traffic Lights: Managing the sequence and timing of lights at intersections efficiently.
// - Streaming Data: Handling continuous data streams in circular buffers for efficient processing.

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}
module.exports = CircularQueue;
const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.size());
queue.print();
console.log(queue.isFull());
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(60);
queue.print();
