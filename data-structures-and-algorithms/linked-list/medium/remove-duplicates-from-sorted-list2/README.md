# 82. Remove Duplicates from Sorted List II
[Reference](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

## Question
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

**Example 1:**
```
Input: 1->2->3->3->4->4->5
Output: 1->2->5
```

**Example 2:**
```
Input: 1->1->1->2->3
Output: 2->3
```

## Intuition
Require a `cur` and `prev` pointer, that points to current node and previous node, respectively.

Also, we don't know if the current node will be deleted or not.

### Working through first example
We want to advance the next pointer until we see a don't see a unique integer. If integer is not unique, we still advance current pointer. 

Once we get to first `3`, we continue advancing `cur` pointer, but not `prev` pointer.

Once we get to `4`, we finally advance `prev` pointer with `cur` pointer.

Once `cur` pointer is null, we know we finally reached the end of the list.

## Solution
Every time we run an algorithm in linear time, we want to make sure that it has constant space. 