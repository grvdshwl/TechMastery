const houseRobber = (nums) => {
  if (nums.length < 2) return nums[0];

  let dp = new Array(nums.length);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[nums.length - 1];
};

const input = [2, 1, 3, 1];
const result = houseRobber(input);
console.log(result);
