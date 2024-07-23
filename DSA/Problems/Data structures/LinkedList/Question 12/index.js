//* Palindrome Linked List

//* Time complexity --> O(n)
//* Space complexity ---> O(n)

var isPalindrome = function (head) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
