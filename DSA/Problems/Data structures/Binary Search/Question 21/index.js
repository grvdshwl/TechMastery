//* Split Array Largest Sum
var splitArray = function (nums, k) {
  let left = Math.max(...nums);
  let right = nums.reduce((acc, num) => acc + num);

  let result = Infinity;

  function isPossible(target) {
    let currentSum = 0;
    let pairs = 1;
    for (let num of nums) {
      if (currentSum + num <= target) {
        currentSum += num;
      } else {
        pairs++;
        currentSum = num;
      }
    }

    return pairs <= k;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (isPossible(mid)) {
      result = Math.min(mid, result);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};
