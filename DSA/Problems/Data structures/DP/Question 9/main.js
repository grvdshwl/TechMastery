//* Jump Game II

var jumpGame = function (nums) {
  let destination = 0;
  let minJumps = 0;
  let coverage = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    coverage = Math.max(coverage, i + nums[i]);

    if (destination === i) {
      minJumps++;
      destination = coverage;
    }

    if (destination >= nums.length - 1) {
      break;
    }
  }

  return minJumps;
};

let input = [2, 3, 1, 1, 4];
const result = jumpGame(input);

console.log(result);
