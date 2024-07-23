//* Remove Nth Node From End Of List
//* Time complexity --->O(n)
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var removeNthFromEnd = function (head, n) {
  let count = 0;

  let dummy = new ListNode(0, head);
  let counter = dummy;

  while (counter && counter.next) {
    counter = counter.next;
    count++;
  }

  let k = count - n;

  let tail = dummy;

  while (k) {
    tail = tail.next;
    k--;
  }

  tail.next = tail.next.next;

  return dummy.next;
};
