# 1064. Fixed Point
[Reference](https://leetcode.com/problems/fixed-point/)

## Question
Given an array `A` of distinct integers sorted in ascending order, return the smallest index `i` that satisfies `A[i] == i`.  Return `-1` if no such `i` exists.

## Intuition
Since the max input size of `A` is 10k, and that `A` is a sorted array in ascending order, we that the optimal algorithm will use binary search to run at _O(log(n))_ time. 