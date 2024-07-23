//* Minimise the maximum difference between heights [V.IMP]
//* This is needed as value of k can be very large and can be very small.
//* Time complexity --> O(n) -- note done
function getMinDiff(arr, n, k) {
  arr.sort((a, b) => a - b);

  let ans = arr[n - 1] - arr[0];
  let smallest = arr[0] + k;
  let largest = arr[n - 1] - k;

  let minPossible, maxPossible;

  for (let i = 0; i < n - 1; i++) {
    maxPossible = Math.max(largest, arr[i] + k);
    minPossible = Math.min(smallest, arr[i + 1] - k);
    if (minPossible < 0) {
      continue;
    }
    ans = Math.min(ans, maxPossible - minPossible);
  }
  return ans;
}

// Example usage:
const arr = [3, 9, 12, 16, 20];
const n = arr.length;
const k = 5;
const result = getMinDiff(arr, n, k);
console.log("Minimum maximum difference:", result);
