//  Generate Parentheses

var generateParenthesis = function (n) {
  const result = [];

  function backtrack(open, close, res) {
    //* if n is equal to open and close push and return
    if (n === open && n === close) {
      result.push(res);
      return;
    }

    //* if open is less than n add open
    if (open < n) {
      let newRes = res + "(";
      backtrack(open + 1, close, newRes);
    }

    //* if close is less than open add close
    if (close < open) {
      let newRes = res + ")";

      backtrack(open, close + 1, newRes);
    }
  }

  backtrack(0, 0, "");

  return result;
};
