//* Swap Nodes In Pairs

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(0, head);

  let curr = dummy;

  while (curr.next && curr.next.next) {
    let node1 = curr.next;
    let node2 = curr.next.next;

    curr.next = node2;

    node1.next = node2.next;
    node2.next = node1;

    curr = curr.next.next;
  }

  return dummy.next;
};
