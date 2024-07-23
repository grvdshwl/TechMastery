//* Jump Game 2
var minJumpsToEnd = function (nums) {
  let pos = 0;
  let des = 0;

  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    des = Math.max(des, i + nums[i]);

    if (i === pos) {
      pos = des;
      jumps++;
    }
  }

  return jumps;
};

// Example usage:
const array = [2, 3, 1, 1, 4];
console.log(minJumpsToEnd(array)); // Output: 2
