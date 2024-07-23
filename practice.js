//* multipy strings

const multipy = (num1, num2) => {
  let m = num1.length;
  let n = num2.length;

  let result = new Array(m + n).fill(0);

  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const product = +num1[i] * +num2[j];
      result[i + j] += product;
      result[i + j + 1] += Math.floor(result[i + j] / 10);
      result[i + j] = result[i + j] % 10;
    }
  }
  result = result.reverse();
  while (result[0] === 0) {
    result.shift();
  }

  return +result.join("");
};

const result = multipy("15", "19");

//  15
//  16
//  90
// 15X
// 240

console.log(result);
