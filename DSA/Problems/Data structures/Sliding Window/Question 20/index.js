//* Count Number of Nice Subarrays

var numberOfSubarrays = function (nums, k) {
  let map = { 0: 1 };
  let prefixSum = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] % 2;
  }

  for (let num of nums) {
    prefixSum += num;

    let diff = prefixSum - k;

    map[prefixSum] = (map[prefixSum] || 0) + 1;
    //* k+ diff = prefixSum
    if (map[diff]) {
      result += map[diff];
    }
  }

  return result;
};
