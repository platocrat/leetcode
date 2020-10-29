# 35. Search Insert Position
[Reference](https://leetcode.com/problems/search-insert-position/)

## Question
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

## Intuition
Since the max size input is 10k, we know that our algorithm must run at either logarithmic _O(log(n))_ or linear _O(n)_ time. 

Since the input array, `nums`, is given in sorted **ascending** order, we know the optimal algorithm will use binary search.