//* find maximum product subarray

//* Time complexity ---> O(N)

function maxProductSubArray(arr) {
  let n = arr.length; // size of array.

  let pre = 1,
    suff = 1;
  let ans = -Infinity;
  for (let i = 0; i < n; i++) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;
    pre *= arr[i];
    suff *= arr[n - i - 1];
    ans = Math.max(ans, Math.max(pre, suff));
  }
  return ans;
}

let arr = [1, 2, -3, 0, -4, -5];
console.log("The maximum product subarray is: " + maxProductSubArray(arr));
