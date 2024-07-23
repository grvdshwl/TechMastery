//* 	 Pow(x, n)
var myPow = function (x, n) {
  function helper(x, n) {
    if (x === 0) {
      return 0;
    }
    if (n === 0) {
      return 1;
    }

    let res = helper(x, Math.floor(n / 2));
    res = res * res;

    if (n % 2) {
      return res * x;
    } else {
      return res;
    }
  }

  let result = helper(x, Math.abs(n));

  return n >= 0 ? result : 1 / result;
};
