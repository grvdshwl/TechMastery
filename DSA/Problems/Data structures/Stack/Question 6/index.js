// Min Stack
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);

    let minValue = this.minStack.length
      ? Math.min(this.minStack[this.minStack.length - 1], value)
      : value;
    this.minStack.push(minValue);
  }

  pop() {
    this.stack.pop();

    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1] || null;
  }

  getMin() {
    if (this.minStack.length) {
      return this.minStack[this.minStack.length - 1];
    } else {
      return null;
    }
  }
}
