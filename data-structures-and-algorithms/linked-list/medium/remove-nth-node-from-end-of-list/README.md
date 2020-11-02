# 19. Remove Nth Node From End of List
[Reference](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Question
Given the head of a linked list, remove the nth node from the end of the list and return its head.

**Follow up**: Could you do this in one pass?

**Example 1**:
```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

## Intuition
With the first example, we have two pointers:
1. `l`
2. `r`

We first advance `r`, then `l`, but we run into a problem.

So, the distance between the left and right pointer must be `n+1`, so that we skip 1 node.

