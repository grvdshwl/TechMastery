//*  Minimum Value to Get Positive Step by Step Sum --done

var minStartValue = function (nums) {
  let startValue = 1;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    if (sum < 1) {
      startValue = Math.max(1 - sum, startValue);
    }
  }
  return startValue;
};
