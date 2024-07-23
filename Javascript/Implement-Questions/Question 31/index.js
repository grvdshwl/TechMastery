//* Implement a pipe method

function pipe(...funcs) {
  return function (value) {
    return funcs.reduce((acc, func) => func(acc), value);
  };
}

// Example usage:
function addTwo(x) {
  return x + 2;
}

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

const transform = pipe(addTwo, double, square);
console.log(transform(3)); // Output: ((3 + 2) * 2) ^ 2 = 100
