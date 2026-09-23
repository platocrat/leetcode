class ListNode {
  val: number
  next: ListNode | null
  constructor (val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * 
 * Time complexity: O(n + m) - Every node needs to be considered at most once, 
 * where m is the number of nodes in list1 and n is the number of nodes in 
 * list2. This is optimal because in the worst case we need to examine every
 * node.
 * Space complexity: O(1) auxiliary space - We only create a dummy node and a
 * few pointers. We're reusing existing nodes, rather than creating a new linked
 * list containing copies of every node.
 * 
 * Important Pattern to Remember:
 * Two sorted linked lists -> compare their current nodes -> take the smaller node -> advance that list's pointer.
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0)
  let current = dummy

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }

    current = current.next
  }

  // Attach whichever list still has nodes
  current.next = list1 ?? list2

  return dummy.next
}