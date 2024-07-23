//* Maximum Length of Pair Chain

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }

  peek() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  getLength() {
    return this.items.length;
  }
}
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1]);

  let stack = new Stack();
  stack.push(pairs[0]);

  for (let i = 1; i < pairs.length; i++) {
    const [startOne, endOne] = stack.peek();
    const [startTwo, endTwo] = pairs[i];

    if (startTwo > endOne) {
      stack.push(pairs[i]);
    }
  }

  return stack.getLength();
};
