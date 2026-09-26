# 206. Reverse Linked List
[Reference](https://leetcode.com/problems/reverse-linked-list/)

## Question
Reverse a singly linked list.

**Example:**
```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

**Follow up:**
A linked list can be reversed either iteratively or recursively. Could you implement both?

## Solution 1: LeetCode's Iterative
Assume that we have linked list `1 → 2 → 3 → Ø`, and we could like to change it to `Ø ← 1 ← 2 ← 3`.

Process:
1. While you are traversing the list, change the current node's `next` pointer to point to its previous element. 
2. Since a node does not have a reference to its previous node, you must store its previous element beforehand. 
3. You also need another pointer to store the next node before changing the reference.
4. Do not forget to return the new head reference at the end!

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */ 
function reverseList(head) {
  // Initialize previous and current node pointers.
  let prev = null,
   curr = head

  // 1. While traversing the list... 
  // Traversal of the linked list will end once our current pointer points to
  // null.
  while (curr != null) {
    // Store current node's next pointer to later iterate in our traversal
    nextTmp = curr.next
    // 1. Change the current node's `next` pointer to point to it's previous 
    // element. So e.g. change `1 → 2` to `Ø ← 1`
    curr.next = prev
    // Walk the `prev` pointer to the next node in the linked list
    prev = curr
    // Walk the `curr` pointer to the next node stored earlier
    curr = nextTmp
  }

  // program will terminate with the linked list starting at node `5`, using the
  // given example
  return prev 
}
```

## Solution 2: Optimized Iterative
```js
function reverseList(head) {
  // initialize previous pointer as the new head of the linked list
  let newHead = null

  // head is always equal to the current node when calling `this.val` 
  while (head != null) {
    let tmp = head
    head = head.next
    tmp.next = prev
    prev = tmp
  }

  return prev
}
```