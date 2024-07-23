//* Rotate List

//* Input: head = [1,2,3,4,5], k = 2
//* Output: [4,5,1,2,3]

//* Time complexity - O(n)

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var rotateRight = function (head, k) {
  // Check if the linked list is empty or has only one node
  if (!head || k === 0) {
    return head;
  }

  // Calculate the length of the linked list and find the tail
  let length = 1;
  let tail = head;
  while (tail && tail.next) {
    tail = tail.next;
    length++;
  }

  // Calculate the effective rotation
  k = k % length;

  // If no rotation is needed, return the original list
  if (k === 0) {
    return head;
  }

  // Find the new head after rotation
  let current = head;
  for (let i = 0; i < length - k - 1; i++) {
    current = current.next;
  }

  // Set the new head and update pointers to rotate the linked list
  let newHead = current.next;
  current.next = null;
  tail.next = head;

  return newHead;
};
