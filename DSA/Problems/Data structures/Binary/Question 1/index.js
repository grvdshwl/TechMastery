//* Sum of two integers
var getSum = function (a, b) {
  while (b !== 0) {
    const carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};

const result = getSum(11, 9);
console.log(result);
