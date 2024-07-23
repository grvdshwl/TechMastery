//* remove value from list
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var removeElements = function (head, val) {
  let dummy = new ListNode(0, head);
  let curr = dummy;

  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
};
