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
function reverseList(head) {
  let newHead = null

  // head is the current node in the linked list when we call `this.val`
  while (head != null) {
    let curr = head
    head = head.next
    curr.next = newHead
    newHead = curr
  }

  return newHead
}