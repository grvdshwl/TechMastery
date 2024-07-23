//* Subarray with 0 sum -done

//* Given an array of positive and negative numbers, the task is to
//* find if there is a subarray (of size at least one) with 0 sum.

//* Time complexity ---> O(N)

const hasZeroSumSubarray = (array) => {
  if (array.length === 0) {
    return false;
  }

  let currentSum = 0;
  let sumSet = new Set();

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];

    if (currentSum === 0 || sumSet.has(currentSum) || array[i] === 0) {
      return true;
    }

    sumSet.add(currentSum);
  }

  return false;
};

const array1 = [4, 2, -3, 1, 6];
const array2 = [4, 2, 0, 1, 6];

console.log(hasZeroSumSubarray(array1)); // Expected output: true
console.log(hasZeroSumSubarray(array2)); // Expected output: true
