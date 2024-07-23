// Happy Number
function calculateSquareSum(num) {
  let arr = String(num).split("");

  let total = 0;

  for (let n of arr) {
    total += +n * +n;
  }
  return total;
}
var isHappy = function (num) {
  let set = new Set();

  while (!set.has(num)) {
    let newNum = calculateSquareSum(num);
    if (newNum === 1) {
      return true;
    }
    set.add(num);
    num = newNum;
  }
  return false;
};
