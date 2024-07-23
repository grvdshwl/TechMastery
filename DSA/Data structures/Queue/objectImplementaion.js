// ===============================
//* Queue Overview
// ===============================
// A queue is a FIFO (First-In-First-Out) linear structure.
// Elements enter at the rear and exit from the front.

// -------------------------------
//* Queue Definition
// -------------------------------
// In computer science, a queue is a linear collection following FIFO.
// Items enter at the rear and exit from the front.

// -------------------------------
//* Simple Explanation
// -------------------------------
// A queue operates like a movie theater line: people join at the rear
// and are served in the order they joined, with the front served first.

// ===============================
// * Printer
// ===============================
// Implementation: Handles print job queue.

// ===============================
// * Callback Queue
// ===============================
// Implementation: Manages callbacks in event-driven systems.

// ===============================
// * CPU Task
// ===============================
// Implementation: Executes tasks in CPU queue.

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
queue.print();

module.exports = Queue;
