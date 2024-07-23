//* Integer To Roman
//* Time complexity - O(n)

//* Example:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var intToRoman = function (num) {
  let arr = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ];

  arr.reverse();

  let result = "";

  for (let [char, value] of arr) {
    let count = Math.floor(num / value);

    for (let i = 0; i < count; i++) {
      result += char;
    }

    num = num % value;
  }

  return result;
};
const result = intToRoman(2587);
console.log(result);
