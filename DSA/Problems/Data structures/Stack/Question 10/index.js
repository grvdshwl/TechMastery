//* Baseball Game
var calPoints = function (operations) {
  const stack = [];
  let notNumber = new Set(["+", "D", "C"]);
  for (let operation of operations) {
    let len = stack.length;
    if (!notNumber.has(operation)) {
      stack.push(+operation);
    } else {
      if (operation === "+") {
        const lastValue = stack[stack.length - 1];
        const secondLastValue = stack[stack.length - 2];
        stack.push(lastValue + secondLastValue);
      } else if (operation === "C") {
        stack.pop();
      } else {
        const lastValue = stack[stack.length - 1];
        stack.push(2 * lastValue);
      }
    }
  }

  return stack.reduce((acc, num) => num + acc, 0);
};
