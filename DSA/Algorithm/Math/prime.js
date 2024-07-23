// Prime Number
const isValid = (num) => {
  return Number.isInteger(num) && num > 0;
};

// Solution 1 - O(n)

const isPrime = (num) => {
  if (!isValid(num)) {
    return `Invalid input : ${num}`;
  }

  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// Solution 1 - O(sqrt(n))

const isPrimeOptimised = (num) => {
  if (!isValid(num)) {
    return `Invalid input : ${num}`;
  }

  if (num < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(29));
