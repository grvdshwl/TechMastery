//* Merge K Sorted Lists

//* Time complexity O(k logk)

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (!lists || lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    let mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      const list1 = lists[i];
      const list2 = lists[i + 1] || null;

      mergedLists.push(mergeTwoLists(list1, list2));
    }

    lists = mergedLists;
  }

  return lists[0];
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let tail = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  if (l1) {
    tail.next = l1;
  } else if (l2) {
    tail.next = l2;
  }

  return dummy.next;
}
