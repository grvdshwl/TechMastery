//* remove value from linked list

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeElements(head, val) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let prev = dummy;
  let curr = head;

  while (curr) {
    let nxt = curr.next;

    if (curr.val === val) {
      prev.next = nxt;
    } else {
      prev = curr;
    }

    curr = nxt;
  }

  return dummy.next;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(6);

let result = removeElements(head, 6);
console.log(result);
