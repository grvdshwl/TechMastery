//*Count the Number of Good Subarrays

var countGood = function (nums, k) {
  const n = nums.length;
  let map = {};
  let result = 0;
  let left = 0;
  let right = 0;
  let goodPairs = 0;

  while (right < n) {
    let num = nums[right];
    map[num] = (map[num] || 0) + 1;
    if (map[num] >= 2) {
      const numCount = map[num];
      goodPairs += numCount - 1;
    }

    while (goodPairs >= k) {
      result += n - right;

      const leftNumCount = map[nums[left]];
      goodPairs -= leftNumCount - 1;
      map[nums[left]]--;
      left++;
    }

    right++;
  }
  return result;
};
