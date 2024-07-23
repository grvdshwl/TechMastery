//* Reverse Nodes In K Group

var reverseKGroup = function (head, k) {
  let stack = [];

  let dummy = new ListNode(0, null);
  let temp = dummy;

  let curr = head;

  while (curr) {
    for (let i = 0; i < k && curr; i++) {
      stack.push(curr);
      curr = curr.next;
    }

    if (stack.length === k) {
      while (stack.length > 0) {
        temp.next = stack.pop();
        temp = temp.next;
      }

      temp.next = curr;
    }
  }

  return dummy.next;
};
