//* Roman To Integer
//* Time complexity - O(n)

//* Example:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = map[s[i]];
    let next = map[s[i + 1]] || 0;

    if (curr < next) {
      res -= curr;
    } else {
      res += curr;
    }
  }

  return res;
};
const result = romanToInt("LVIII");
console.log(result);
