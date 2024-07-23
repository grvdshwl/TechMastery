//* Swapping Nodes in a Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let dummy = new ListNode(0, head);
  let currNode = dummy;
  let endNode = dummy;

  let counter = 0;

  while (counter < k) {
    currNode = currNode.next;
    counter++;
  }

  let startNode = currNode;

  while (currNode) {
    currNode = currNode.next;
    endNode = endNode.next;
  }

  let temp = startNode.val;
  startNode.val = endNode.val;
  endNode.val = temp;

  return dummy.next;
};
