/**
 * @dev
 * 142. Linked List Cycle II
 * 
 * Difficulty:         Medium
 * 
 * Reference:
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * 
 * Intuition:          Since each node needs to hold *its own value*, 
 *                     represented by the `this.val` method, and *a pointer to 
 *                     the next node in the list*, represented by the 
 *                     `this.next` method, we can specify each property as as a
 *                     method of our `ListNode` function.
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
 * 
 * The return value is the value of the 
 * @return {ListNode}
 *
 * 
 * @dev
 * Approach 1: Set (or Hash Table)
 *
 * Intuition:          If we use a `Set` data structure to keep track of nodes 
 *                     that we've seen previously, we can traverse the linked 
 *                     list and return the first duplicate node.
 *
 * Time complexity:    O(n)
 * 
 *                     In the worst case, we must run through and process each
 *                     node in the linked list, `ListNode`, which takes O(n)
 *                     time.
 *
 * Space complexity:   O(n)
 * 
 *                     In the worst case, we store n - 1 (i.e., all) nodes in 
 *                     the linked list, which takes O(n) space.
 */
function detectCycle(head) {
  let visited = new Set() // keep track of all `visited` nodes
  /**
   * Each node of the linked list will be traversed by calling the `.next` 
   * method on the instance of the `LinkNode` function, which is represented by
   * `head`.
   * 
   * So, we assign the variable `node` to `head` so that we can later traverse
   * through all the nodes in the linked list (again, by using `LinkNode`s 
   * `.next` method) until we find the starting point (duplicate node) of the 
   * cycle.
   */
  let node = head

  while (node != null) {
    if (visited.has(node)) {
      return node
    } else {
      visited.add(node)
      // using pointer to the next next node to traverse through the linked list, i.e.,
      // through `LinkNode`
      node = node.next
    }
  }

  return null
}

/**
 * @dev
 * Approach 2: Floyd's Tortoise and Hare Algorithm
 *
 * Intuition:          The idea behind the algorithm is, if you have two
 *                     pointers in a linked list, one moving twice as fast (the
 *                     hare) than the other (the tortoise), then if they
 *                     intersect, there is a cycle in the linked list. If the
 *                     hare and tortoise don't intersect, then there is no
 *                     cycle.
 *
 *                     In the problem, we're asked to return a boolean for
 *                     whether or not there is a cycle. You are given a linked
 *                     list, `LinkNode`, with each node's value that is
 *                     represented by the `.val` method, and a pointer (which
 *                     points to the next node after each node value) that is
 *                     represented by the `.next` method.
 *
 * Time complexity:    O()
 *
 * Space complexity:   O()
 *
 * @param {Number[]} head
 * @return {Number} node
 */
function detectCycle(head) {
  function getIntersect(head) {
    /**
     * Initiate slow and fast pointer, `tortoise` and `hare`, respectively, each
     * starting at the `head` of the linked list `LinkNode`.
     */
    let tortoise = head
    let hare = head

    /**
     * A fast pointer will either loop around a cycle and meet the slow pointer,
     * or reach the `null` at the end of a non-cyclic list.
     */
    while (hare && hare.next) {
      tortoise = tortoise.next
      hare = hare.next.next

      if (tortoise == hare) {
        return tortoise
      }
    }

    /**
     * If we process the entire linked list and haven't found a meeting node, 
     * return null
     */
    return null
  }

  if (head == null) {
    return null
  }

  /**
   * If there is a cycle, the fast/slow pointers will intersect at some node.
   * Otherwise, there is no cycle, so we cannot find an entrance to a cycle.
   */
  intersection = getIntersect(head)

  if (intersection == null) {
    return null
  }

  /**
   * To find the entrance to the cycle, we have two pointers traverse at the
   * same speed -- one from the front of the list, and the other from the point
   * of intersection.
   */
  pointer1 = head
  pointer2 = intersection

  while (pointer1 != pointer2) {
    pointer1 = pointer1.next
    pointer2 = pointer2.next
  }

  return pointer1
}