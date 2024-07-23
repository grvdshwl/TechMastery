//Fibonacci Sequence [0,1,1,2,3,5]

// Solution one --- O(n)
const fibonacci = (n) => {
  if (n < 0) {
    return "Invalid Input.";
  }

  const result = [0, 1];
  if (n <= 1) {
    return result.slice(0, n + 1);
  }

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
};

// solution Two --O(2^N)

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

// solution 3 O(2^N)

const fibonacciThree = (num) => {
  if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    const sequence = fibonacciThree(num - 1);
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    return sequence;
  }
};
console.log(recursiveFibonacci(3));
