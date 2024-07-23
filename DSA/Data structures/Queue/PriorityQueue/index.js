// ===============================
//* Priority Queue Overview
// ===============================
// A priority queue is an abstract data type where elements are inserted with an associated priority,
// and elements with higher priorities are served before elements with lower priorities.

// -------------------------------
//* Priority Queue Definition
// -------------------------------
// In computer science, a priority queue is a data structure that maintains a set of elements
// along with their associated priorities. Elements with higher priorities are given precedence
// over elements with lower priorities when served or processed.

// -------------------------------
//* Simple Explanation
// -------------------------------
// Imagine a priority queue like a line at an amusement park. Visitors (elements) enter the line
// based on their ticket priority. Those with VIP tickets (higher priority) get to ride the attractions
// before regular ticket holders (lower priority), regardless of their arrival order.

//* Application

//Operating Systems: Priority queues are used in scheduling processes.
// For instance, in a multi-tasking environment,
// the CPU might execute processes based on their priority levels.

// Job Scheduling: In systems where jobs or tasks are assigned priorities,
// priority queues are used to manage the order of execution.

class PriorityQueue {
  constructor() {
    this.queue = {};
  }

  enqueue(element, priority) {
    if (!this.queue[priority]) {
      this.queue[priority] = [];
    }
    this.queue[priority].push(element);
  }

  dequeue() {
    const priorities = Object.keys(this.queue);
    if (priorities.length === 0) {
      return null;
    }

    const highestPriority = Math.min(...priorities);
    const removedElement = this.queue[highestPriority].shift();

    if (this.queue[highestPriority].length === 0) {
      delete this.queue[highestPriority];
    }

    return removedElement;
  }

  isEmpty() {
    return Object.keys(this.queue).length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    const priorities = Object.keys(this.queue);
    const highestPriority = Math.min(...priorities);

    return this.queue[highestPriority][0];
  }

  print() {
    const priorities = Object.keys(this.queue).sort((a, b) => a - b);
    for (const priority of priorities) {
      console.log(`Priority ${priority}: ${this.queue[priority].join(", ")}`);
    }
  }
}

module.exports = PriorityQueue;
// Example usage:
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 4", 1);

priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 3);

// priorityQueue.print();
// Output:
// Priority 1: Task 2
// Priority 2: Task 1
// Priority 3: Task 3
