//* Merge Sorted Array --done

function merge(nums1, m, nums2, n) {
  let last = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[last] = nums1[i];
      i--;
    } else {
      nums1[last] = nums2[j];
      j--;
    }
    last--;
  }

  while (j >= 0) {
    nums1[last] = nums2[j];
    j--;
    last--;
  }
}

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
