# 560. Subarray Sum Equals K
Difficulty: Medium

[Reference](https://leetcode.com/problems/subarray-sum-equals-k/)

## Question
Given an array of integers and an integer `k`, you need to find the total number of continuous subarrays whose sum equals to `k`.

Example 1:
```
Input:nums = [1,1,1], k = 2
Output: 2
``` 

**Constraints:**
* The length of the array is in range [1, 20,000].
* The range of numbers in the array is [-1000, 1000] and the range of the integer `k` is [-1e7, 1e7].

## Intuition
This problem can be solved using a similar mental model used with sliding window problems. 

The trick is to understand that we need to keep track of a _rolling sum_ while iterating through the array while also _storing the new sum at each iteration_ in memory.

Also, understand that the data retreival of those sums must be very fast, so we need to use a data structure that has _O(1)_ time for lookups. That means we should use a HashMap!

