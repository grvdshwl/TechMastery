//  Generate Parentheses
var generateParenthesis = function (n) {
  const stack = [];
  const result = [];

  function backtrack(open, close) {
    //* if n is equal to open and close push and return
    if (n === open && n === close) {
      const bracket = stack.join("");
      result.push(bracket);
      return;
    }

    //* if open is less than n add open
    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close);
      stack.pop();
    }

    //* if close is less than open add close
    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);

  return result;
};
