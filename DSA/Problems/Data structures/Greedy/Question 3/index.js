// Longest Turbulent Subarray

var maxTurbulenceSize = function (arr) {
  if (arr.length <= 1) return arr.length;
  let curr = 1;
  let max = 1;
  let lastSign = 0;

  for (let i = 1; i < arr.length; i++) {
    let sign = Math.sign(arr[i] - arr[i - 1]);
    if (sign === 0) curr = 1;
    else if (sign !== lastSign) curr++;
    else curr = 2;
    max = Math.max(max, curr);
    lastSign = sign;
  }
  return max;
};
