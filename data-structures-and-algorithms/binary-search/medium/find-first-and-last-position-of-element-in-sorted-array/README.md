# 34. Find First and Last Position of Element in Sorted Array
[Reference](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

## Question
Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

Follow up: Could you write an algorithm with `O(log n)` runtime complexity?

## Intuition
Given the max input size is 100k, we know that our algorithm must run in at worst logarithmic _O(log(n))_ or linear _O(n)_ time.

Since the follow-up asks to write an algorithm with the former time complexity, we know that our optimal algorithm will use binary search.

## Solution
Since the array is always sorted in ascending order, we know that the `target` value will always first appear next to _and_ just before the its second appearance.

Thus, we must modify the binary search algorithm to mark the left-most and right-most occurrence of `target` as `[leftMost, rightMost]`.