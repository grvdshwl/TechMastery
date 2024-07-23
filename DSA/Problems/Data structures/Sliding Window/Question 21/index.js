//*Count the Number of Good Subarrays

var numberOfSubarrays = function (nums, k) {
  const n = nums.length;
  let map = {};
  let result = 0;
  let left = 0;
  let right = 0;
  let goodPairs = 0;

  while (right < n) {
    let num = nums[right];
    goodPairs += map[num] || 0;
    map[num] = (map[num] || 0) + 1;

    while (goodPairs >= k) {
      goodPairs -= map[nums[left]] - 1;
      map[nums[left]]--;
      left++;
    }

    result += left;
    right++;
  }
  return result;
};
