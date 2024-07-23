//* Detect Cycle in a Linked List
//* Floyd's Tortoise Hare Algorithm

//* Time complexity ---> O(n)

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
