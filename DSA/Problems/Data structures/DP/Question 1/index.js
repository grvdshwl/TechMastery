//* Climbing Stairs
//* Time complexity ---> O(n)

var climbStairs = function (n) {
  let result = [1, 2];

  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result[n - 1];
};

const result = climbStairs(5);
console.log(result);
