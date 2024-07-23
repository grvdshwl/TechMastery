//* Reverse a Linked List
var reverseList = function (head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};
