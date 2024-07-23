// Factorial

// Solution 1 o(n)

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// Solution 2 --- O(n)

const factorialTwo = (n) => {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};

console.log(factorial(7));

console.log(factorialTwo(7));
