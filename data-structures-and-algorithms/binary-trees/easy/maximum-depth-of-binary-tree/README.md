# 104. Maximum Depth of Binary Tree
[Reference](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## Question
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Note**: A leaf is a node with no children.

**Example**:
Given binary tree `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
```
return its depth = 3.

## Intuition
Right away, we know that "find its maximum depth" is a _BIG_ hint that we must use depth-first search (DFS) in our algorithm. 

Recall that the DFS approach chooses one subtree from the root (i.e. left or right subtree) to wholly explore down to its leaf node (i.e. lowest level of that subtree). So, we use a pre-order traversal in our algorithm.