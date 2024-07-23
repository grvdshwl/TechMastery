//* Merge Two Sorted Lists
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let tail = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  if (l1) {
    tail.next = l1;
  } else if (l2) {
    tail.next = l2;
  }

  return dummy.next;
}
