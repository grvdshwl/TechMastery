// Valid Parantheses

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
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
}
var isValid = function (s) {
  let stack = new Stack();
  let n = s.length;

  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  stack.push(s[0]);

  for (let i = 1; i < n; i++) {
    let char = s[i];

    if (map[char]) {
      if (map[char] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.isEmpty();
};
