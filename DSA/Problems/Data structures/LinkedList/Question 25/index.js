//* Partition list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let left = new ListNode(0);
  let right = new ListNode(0);
  let leftTail = left;
  let rightTail = right;

  while (head !== null) {
    if (head.val < x) {
      leftTail.next = head;
      leftTail = leftTail.next;
    } else {
      rightTail.next = head;
      rightTail = rightTail.next;
    }
    head = head.next;
  }

  leftTail.next = right.next;
  rightTail.next = null;

  return left.next;
};
