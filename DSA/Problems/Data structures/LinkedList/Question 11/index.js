//*Remove Duplicates from Sorted List
//* Input: head = [1,1,2]
//* Output: [1,2]
var deleteDuplicates = function (head) {
  let curr = head;

  while (curr && curr.next) {
    if (curr.next.val === curr.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};
