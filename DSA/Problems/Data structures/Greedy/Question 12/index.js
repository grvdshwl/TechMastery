//* Valid Parenthesis
//* Time complexity ---> O(n)

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

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const isValid = function (s) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = new Stack();

  for (let char of s) {
    if (map[char]) {
      if (map[char] !== stack.peek()) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }

  return stack.isEmpty();
};

const input = "[{}]{";

const result = isValid(input);
console.log(result);
