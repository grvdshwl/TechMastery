//* Reorder List

//* Time complexity ---> O(n)

var reorderList = function (head) {
  // Edge case: return if the list has less than 2 nodes
  if (!head || !head.next) return head;

  // Step 1: Split the list into two halves
  let slow = head,
    fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next;
  // Split the list by setting the end of the first half to null
  slow.next = null;

  // Step 2: Reverse the second half of the list
  let prev = null;
  while (secondHalf) {
    let temp = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = temp;
  }
  secondHalf = prev; // `prev` is now the new head of the reversed second half

  // Step 3: Merge the two halves back together
  let firstHalf = head;
  let dummy = new ListNode(0);
  let result = dummy;

  while (firstHalf || secondHalf) {
    if (firstHalf) {
      result.next = firstHalf;
      result = result.next;
      firstHalf = firstHalf.next;
    }
    if (secondHalf) {
      result.next = secondHalf;
      result = result.next;
      secondHalf = secondHalf.next;
    }
  }

  return dummy.next;
};
