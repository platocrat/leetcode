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
 */

/**
 * @dev This function adds two numbers represented by two linked lists. Each node in the linked list contains a single digit, and the digits are stored in reverse order. The function returns a new linked list representing the sum of the two numbers.
 * @dev Time and space complexity analysis:
 * 
 * - Time complexity: O(max(m, n)), where m and n are the lengths of the two linked lists.
 * - Space complexity: O(1), the length of the new linked list is t most max(m, n) + 1, but we don't count the space used for the output linked list. 
 * @param l1 
 * @param l2 
 * @returns 
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0)

  let current = dummy,
    current1 = l1,
    current2 = l2,
    carry = 0

  while (current1 !== null || current2 !== null || carry !== 0) {
    const digit1 = current1?.val ?? 0
    const digit2 = current2?.val ?? 0

    const sum = digit1 + digit2 + carry

    const digit = sum % 10
    carry = Math.floor(sum / 10)

    current.next = new ListNode(digit)
    current = current.next

    current1 = current1?.next ?? null
    current2 = current2?.next ?? null
  }

  return dummy.next
};