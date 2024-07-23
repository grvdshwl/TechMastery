//* Merge K Sorted Lists

function mergeKLists(lists) {
  if (!lists || lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    const mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = lists[i + 1] || null;
      mergedLists.push(mergeList(l1, l2));
    }

    lists = mergedLists;
  }

  return lists[0];
}

function mergeList(l1, l2) {
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
  }

  if (l2) {
    tail.next = l2;
  }

  return dummy.next;
}
