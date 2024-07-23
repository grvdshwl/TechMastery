//* Reverse a Linked List II

//*Input: head = [1,2,3,4,5], left = 2, right = 4
//* Output: [1,4,3,2,5]

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const reverseBetween = function (head, left, right) {
  // Create a dummy node to simplify edge cases
  let dummy = new ListNode(0, null);
  dummy.next = head;

  // Initialize pointers
  let start = dummy;
  let rightNode = dummy;

  // Move the start pointer to the node before the sublist to be reversed
  while (left > 1) {
    start = start.next;
    left--;
  }

  // Move the rightNode pointer to the node after the sublist to be reversed
  while (right > 0) {
    rightNode = rightNode.next;
    right--;
  }

  // Store the nodes for later reconnection
  let leftNode = start.next;
  let end = rightNode.next;

  // Disconnect the sublist to be reversed from the rest of the list
  start.next = null;
  rightNode.next = null;

  // Reverse the sublist
  let prev = null;
  let curr = leftNode;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Reconnect the reversed sublist back to the original list
  start.next = prev;
  leftNode.next = end;

  // Return the head of the modified linked list
  return dummy.next;
};
