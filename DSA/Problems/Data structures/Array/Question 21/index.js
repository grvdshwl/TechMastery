//* Subarray Sum Equals K -done

//* Given an array of integers nums and an integer k,
//* return the total number of subarrays whose sum equals to k.

//* Time complexity ---> O(N)

//* y = y-k + k
const subarraySum = (array, k) => {
  if (array.length === 0) {
    return 0;
  }

  let currentSum = 0;
  let map = { 0: 1 };
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];

    let diff = currentSum - k;

    if (map[diff]) {
      count += map[diff];
    }

    map[currentSum] = (map[currentSum] || 0) + 1;
  }

  return count;
};

// Test cases
console.log(subarraySum([1, 1, 1], 2)); // Expected output: 2
console.log(subarraySum([1, 2, 3], 3)); // Expected output: 2
console.log(subarraySum([4, 2, -3, 1, 6], 0)); // Expected output: 1
console.log(subarraySum([], 3)); // Expected output: 0
console.log(subarraySum([0, 0, 0, 0, 0], 0)); // Expected output: 15
