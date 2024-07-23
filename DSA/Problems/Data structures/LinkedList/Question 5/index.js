//* Remove Nth Node From End Of List
//* Time complexity --->O(n)
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);

  let left = dummy;
  let right = head;

  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return dummy.next;
};
