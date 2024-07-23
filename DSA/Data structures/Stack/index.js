// ===============================
// * Stack
// ===============================
// A fundamental data structure in computer science and programming following the Last-In-First-Out (LIFO) principle.
// It functions like a stack of plates, where the last item added is the first one to be removed.

// ===============================
// * Implementation Examples
// ===============================
// 1. Call Stack
// 2. Undo Operation
// 3. Browser history tracking button

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

module.exports = Stack;

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.print();
console.log(stack.pop());
console.log(stack.peek());
stack.print();
