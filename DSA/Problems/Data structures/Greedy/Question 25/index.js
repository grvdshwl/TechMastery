//* Advantage Shuffle

var advantageCount = function (nums1, nums2) {
  let n = nums2.length;
  nums1.sort((a, b) => a - b);

  let sorted2 = nums2
    .map((num, i) => ({ value: num, index: i }))
    .sort((a, b) => a.value - b.value);

  let result = new Array(n);

  let left = 0;
  let right = n - 1;

  for (let item of nums1) {
    if (sorted2[left].value < item) {
      result[sorted2[left].index] = item;
      left++;
    } else {
      result[sorted2[right].index] = item;
      right--;
    }
  }

  return result;
};
