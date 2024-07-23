//* 	Multiply Strings
const multiply = (num1, num2) => {
  if (num1 === "0" || num2 === "0") return "0";

  const m = num1.length,
    n = num2.length;
  let res = new Array(m + n).fill(0);

  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");
  console.log(num1, num2);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const product = Number(num1[i]) * Number(num2[j]);

      res[i + j] += product;
      res[i + j + 1] += Math.floor(res[i + j] / 10);
      res[i + j] = res[i + j] % 10;
    }
  }
  res = res.reverse();
  while (res[0] === 0) res.shift();

  return res.join("");
};
console.log(multiply("15", "16"));
