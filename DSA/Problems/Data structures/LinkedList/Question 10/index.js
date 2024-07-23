//* Add Two Numbers

//* Input: l1 = [2,4,3], l2 = [5,6,4]
//* Output: [7,0,8]
//* Explanation: 342 + 465 = 807.

//* Time complexity -- O(n)

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Solution {
  addTwoNumbers(l1, l2) {
    let dummy = new ListNode();
    let cur = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
      let v1 = l1 ? l1.val : 0;
      let v2 = l2 ? l2.val : 0;

      // new digit
      let val = v1 + v2 + carry;
      carry = Math.floor(val / 10);
      val = val % 10;

      cur.next = new ListNode(val);

      // update pointers
      cur = cur.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }

    return dummy.next;
  }
}
