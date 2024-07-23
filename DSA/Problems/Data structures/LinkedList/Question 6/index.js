//* Reorder List

//* Time complexity ---> O(n)

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reorderList(head) {
  if (!head || !head.next) {
    return head;
  }

  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let secondHalf = reverseList(slow.next);

  slow.next = null; // Break the connection between the two halves

  // Step 3: Merge the two halves
  mergeLists(head, secondHalf);
}

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

function mergeLists(list1, list2) {
  while (list2) {
    let temp1 = list1.next;
    let temp2 = list2.next;

    list1.next = list2;
    list2.next = temp1;

    list1 = temp1;
    list2 = temp2;
  }
}
