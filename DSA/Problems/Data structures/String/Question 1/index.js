//* Encode and decode strings

const encode = (input) => {
  let result = "";
  for (let string of input) {
    let length = string.length;
    result += `${length}#`;
    result += string;
  }

  return result;
};

const decode = (string) => {
  let result = [];

  let i = 0;

  while (i < string.length) {
    let j = i;
    while (string[j] !== "#") {
      j = j + 1;
    }
    let len = Number(string[j - 1]);
    let str = string.slice(j + 1, j + 1 + len);
    result.push(str);
    i = j + 1 + len;
  }
  return result;
};
const input = ["leet", "code", "max"];
const encodeInput = encode(input);
const decodeOutput = decode(encodeInput);
console.log(decodeOutput);
