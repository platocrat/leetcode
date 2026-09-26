# 24. Swap Nodes in Pairs
[Reference](https://leetcode.com/problems/swap-nodes-in-pairs/)

## Question
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.

**Example 1:**
```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

## Intuition
Using the first example, we want to initialize `cur` and `cur.next` pointers.

In general, there we need to know the predecessor, and the successor nodes.

So, each time we swap a pair of nodes, we must update 3 pointers:
1. From `prev` to `cur`, and 
2. From `cur` to `succ`