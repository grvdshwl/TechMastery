function memoize(cb) {
  const cache = {};

  return function (...args) {
    let argsKey = JSON.stringify(args);
    if (cache[argsKey]) {
      return cache[argsKey];
    } else {
      const result = cb(...args);
      cache[argsKey] = result;
      return result;
    }
  };
}

function square(x) {
  console.log("Calculating square of", x);
  return x * x;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(10));
