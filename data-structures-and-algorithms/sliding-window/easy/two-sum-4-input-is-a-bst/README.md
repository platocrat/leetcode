# 653. Two Sum IV - Input is a BST
Difficulty: Easy

[Reference](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

## Question:
Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

### Example 1:
```
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true
```

### Example 2:
```
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
```

### Example 3:
```
Input: root = [2,1,3], k = 4
Output: true
```

### Example 4:
```
Input: root = [2,1,3], k = 1
Output: false
```

### Example 5:
```
Input: root = [2,1,3], k = 3
Output: true
```

## Approach 1: Using HashSet

### Time complexity:  O(n)
Entire tree, n, is traversed in the worst case.

### Space complexity:  O(n)
Worst case, we store all n tree node values in set