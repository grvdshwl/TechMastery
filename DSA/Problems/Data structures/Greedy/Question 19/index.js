//* String Without AAA or BBB
var strWithout3a3b = function (a, b) {
  let s = "";
  while (a > 0 && b > 0) {
    if (a === b) {
      s += "ab";
      a--;
      b--;
    } else if (a > b) {
      s += "aab";
      a -= 2;
      b--;
    } else if (a < b) {
      s += "bba";
      a--;
      b -= 2;
    }
  }
  while (a > 0) {
    s += "a";
    a--;
  }

  while (b > 0) {
    s += "b";
    b--;
  }
  return s;
};

let a = 1,
  b = 2;
console.log(strWithout3a3b(1, 2));
