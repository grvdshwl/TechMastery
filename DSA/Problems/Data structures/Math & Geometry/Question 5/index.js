// Plus One
var plusOne = function (digits) {
  let num1 = digits;
  let num2 = [1];
  let i = digits.length - 1;
  let j = 0;
  let carry = 0;
  let result = [];
  while (i >= 0 || j >= 0 || carry) {
    let n1 = num1[i] || 0;
    let n2 = num2[j] || 0;

    let sum = n1 + n2 + carry;

    let num = sum % 10;

    carry = Math.floor(sum / 10);

    result.unshift(num);

    if (i < num1.length) {
      i--;
    }
    if (j < num2.length) {
      j--;
    }
  }

  return result;
};
