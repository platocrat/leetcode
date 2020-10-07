/**
 * @dev
 * Intuition:                Since each node needs to hold *its own value*,
 *                           represented by the `this.val` method, and *a 
 *                           pointer to the next node*, represented by the
 *                           `this.next` method, we can specify each property as
 *                           as a method of our `ListNode` function.
 * 
 * Defintion for a singly-linked list.
 * function ListNode(val) {
 *   this.val = val 
 *   this.next = null
 * }
 */

/**
 * `head` is a linked list, created by a call of the `ListNode` function with
 * the values of the linked list passed in as an array for the argument.
 * @param {ListNode} head
 * The return value is the value of the 
 * @return {ListNode}
 *
 * @dev
 * Difficulty: Medium
 * -----------------------------------------------------------------------------
 * Approach 1: Set (or Hash Table)
 *
 * Intuition:                If we use a `Set` data structure to keep track of
 *                           nodes that we've seen previously, we can traverse
 *                           the linked list and return the first duplicate
 *                           node.
 *
 * Time complexity:         O(n)
 *                          In the worst case, we must run through and process
 *                          each node in the linked list, `ListNode`, which
 *                          takes O(n) time.
 *
 * Space complexity:        O(n)
 *                          In the worst case, we store n - 1 (i.e., all) nodes
 *                          in the linked list, which takes O(n) space.
 */
function detectCycle(head) {
  visited = new Set() // keep track of all `visited` nodes
  // each node of the linked list will be traversed by calling the `.next`
  // method on the instance of the `LinkNode` function, which is represented by
  // `head`.
  // So, we assign the variable `node` to `head` so that we can later traverse
  // through all the nodes in the linked list (again, by using `LinkNode`s 
  // `.next` method) until we find the starting point (duplicate node) of the
  // cycle.
  node = head

  while (node != null) {
    if (visited.has(node)) {
      return node
    } else {
      visited.add(node)
      // using pointer to next node to traverse through the linked list, i.e.,
      // through `LinkNode`
      node = node.next
    }
  }
}