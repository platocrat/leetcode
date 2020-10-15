/**
 * Defintion for a singly-linked list.
 * function ListNode(val) {
 *   this.val = val 
 *   this.next = null
 * }
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle1(head) {
  let visited = new Set() // keep track of all `visited` nodes

  // Each node of the linked list will be traversed by calling the `.next` 
  // method on the instance of the `ListNode` function, which is represented by
  // `head`.
  // 
  // So, we assign the variable `node` to `head` so that we can later traverse
  // through all the nodes in the linked list (again, by using `ListNode`s 
  // `.next` method) until we find the starting point (duplicate node) of the 
  // cycle.
  // 
  let node = head

  while (node != null) {
    if (visited.has(node)) {
      return node
    } else {
      visited.add(node)
      // using pointer to the next next node to traverse through the linked list, i.e.,
      // through `ListNode`
      node = node.next
    }
  }

  return null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle2(head) {
  function getIntersect(head) {
    // Initiate slow and fast pointer, `tortoise` and `hare`, respectively, each
    // starting at the `head` of the linked list `ListNode`.
    let tortoise = head
    let hare = head

    //  until `hare` can no longer advance... 
    //
    //  it is sufficient to only check `hare` because it will always be ahead of
    //  `tortoise` in an acyclic list.
    //
    //  A fast pointer will either loop around a cycle and meet the slow pointer,
    //  or reach the `null` at the end of a non-cyclic list. 
    while (hare && hare.next) {
      tortoise = tortoise.next
      hare = hare.next.next

      if (tortoise == hare) {
        return tortoise
      }
    }

    // If we process the entire linked list and haven't found a meeting node, 
    // return null
    return null
  }

  if (head == null) {
    return null
  }

  // If there is a cycle, the fast/slow pointers will intersect at some node.
  // Otherwise, there is no cycle, so we cannot find an entrance to a cycle.
  intersection = getIntersect(head)

  if (intersection == null) {
    return null
  }

  // To find the entrance to the cycle, we have two pointers traverse at the
  // same speed -- one from the front of the list, and the other from the point
  // of intersection.
  pointer1 = head
  pointer2 = intersection

  while (pointer1 != pointer2) {
    pointer1 = pointer1.next
    pointer2 = pointer2.next
  }

  return pointer1
}