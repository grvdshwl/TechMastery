//* Evaluate Reverse Polish Notation
var evalRPN = function (tokens) {
  const stack = [];

  for (let token of tokens) {
    if (token === "+") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b + a);
    } else if (token === "-") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    } else if (token === "*") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b * a);
    } else if (token === "/") {
      let a = stack.pop();
      let b = stack.pop();
      let divison = b / a > 0 ? Math.floor(b / a) : Math.ceil(b / a);
      stack.push(divison);
    } else {
      stack.push(+token);
    }
  }

  return stack[0];
};
