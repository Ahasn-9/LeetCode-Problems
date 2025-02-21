class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(-1); // Dummy node to simplify edge cases
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // If elements remain in either list, attach them
  current.next = l1 !== null ? l1 : l2;

  return dummy.next; // Return merged list (excluding dummy node)
}

// Example Usage:
let l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

let mergedList = mergeTwoLists(l1, l2);

// Print merged list
function printList(node) {
  let output = [];
  while (node) {
    output.push(node.val);
    node = node.next;
  }
  console.log(output.join(" -> "));
}

printList(mergedList); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6
