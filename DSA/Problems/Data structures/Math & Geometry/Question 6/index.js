//* 	 Pow(x, n)
function calculatePower(x, n) {
  if (n === 0) {
    return 1;
  }

  let newPower = Math.floor(n / 2);

  let half = calculatePower(x, newPower);

  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
}

var myPow = function (x, n) {
  if (x === 0) {
    return 0;
  }

  const absolutePower = Math.abs(n);

  const result = calculatePower(x, absolutePower);

  return n < 0 ? 1 / result : result;
};
