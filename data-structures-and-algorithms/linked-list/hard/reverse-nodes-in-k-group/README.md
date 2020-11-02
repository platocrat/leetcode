# 25. Reverse Nodes in k-group
[Reference](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## Question
Given a linked list, reverse the nodes of a linked list `k` at a time and return its modified list.

`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.

**Follow up:**
* Could you solve the problem in O(1) extra memory space?
* You may not alter the values in the list's nodes, only nodes itself may be changed.

## Inuition:
Similar to [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/), but instead of 2 nodes, we need to reverse K nodes.

Input at `k = 3`:
```
-> 7 -> 6 -> 1 -> 4 -> 5
```

1. `prev` starts at 7, and `cur` starts at 6
2. advance head -> `head` now at 1
3. move `tmp` to 6, 
5. `newHead` now at 1
6. Advance head again -> `head` now at 4
7. move `tmp` to 4
8. advance head again -> `head` now at 5
9. move `newHead` to 4

We want to point the old head to point to the rest of the list.

We also want to move `cur`.