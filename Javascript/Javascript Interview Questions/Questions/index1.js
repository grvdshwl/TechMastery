/*
Problem Statement:
You are given a set of mathematical expressions where each line defines either:
1. A variable with a numerical value.
2. A variable that depends on other variables through mathematical operations.

The goal is to evaluate the value of a specified key (e.g., "root") by recursively calculating the values of its dependencies, based on the input definitions. If the key does not exist in the input, return "Invalid input."

Input:
A string where each line has the format `key: expression`, with:
- `key` as a unique identifier.
- `expression` as either a number or a mathematical expression using other keys.

Output:
The evaluated value of the specified key, or "Invalid input" if the key is not defined.

Example Input:
*/

let input = `
root: pppw + sjmn
dbpl: 5
cczh: sllz + lgvd
zczc: 2
ptdq: humn - dvpt
dvpt: 3
lfqf: 4
humn: 5
ljgn: 2
sjmn: drzm * dbpl
sllz: 4
pppw: cczh / lfqf
lgvd: ljgn * ptdq
drzm: hmdt - zczc
hmdt: 32
`;
const findRoot = (input, key) => {
  // Parse input into an object
  const obj = {};
  input
    .split("\n")
    .filter(Boolean)
    .forEach((entry) => {
      const [key, value] = entry.split(":").map((str) => str.trim());
      obj[key] = value;
    });

  const find = (key) => {
    const val = obj[key];
    if (!val) {
      return "Invalid input";
    }
    if (!isNaN(+val)) return +val;

    const [operand1, operator, operand2] = val.split(" ");
    const num1 = isNaN(+operand1) ? find(operand1) : +operand1;
    const num2 = isNaN(+operand2) ? find(operand2) : +operand2;

    return eval(`${num1} ${operator} ${num2}`);
  };

  return find(key);
};

const result = findRoot(input, "root");

console.log(result);
