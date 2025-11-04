//* Minimum swaps required to bring all elements less than or equal to k together--done

// Input:  arr[] = {2, 1, 5, 6, 3}, k = 3
// Output: 1
// Explanation:
// To bring elements 2, 1, 3 together, swap element ‘5’ with ‘3’ such
// that final array will be arr[] = {2, 1, 3, 6, 5}

// Input:  arr[] = {2, 7, 9, 5, 8, 7, 4}, k = 5
// Output: 2

//* Time complexity ---> O(n)

const input = [2, 7, 9, 5, 8, 7, 4];
const k = 5;
const minSwaps = (arr, k) => {
  // Count elements less than or equal to 'k' in the array
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      count++;
    }
  }
  // Count elements greater than 'k' in the first window
  let badCount = 0;
  for (let i = 0; i < count; i++) {
    if (arr[i] > k) {
      badCount++;
    }
  }

  let minSwaps = badCount;
  let windowStart = 0;
  for (let windowEnd = count; windowEnd < arr.length; windowEnd++) {
    if (arr[windowStart] > k) {
      badCount--;
    }
    if (arr[windowEnd] > k) {
      badCount++;
    }

    minSwaps = Math.min(minSwaps, badCount);
    windowStart++;
  }

  return minSwaps;
};

const result = minSwaps(input, k);
console.log(result);
