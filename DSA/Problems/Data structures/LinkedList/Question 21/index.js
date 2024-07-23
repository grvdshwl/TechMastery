//* is Palindrome
var isPalindrome = function (head) {
  const listVals = [];
  while (head) {
    listVals.push(head.val);
    head = head.next;
  }

  let left = 0,
    right = listVals.length - 1;
  while (left < right) {
    if (listVals[left] !== listVals[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
