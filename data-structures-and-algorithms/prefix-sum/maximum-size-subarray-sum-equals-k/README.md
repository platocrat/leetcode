# 325. Maximum Size Subarray Sum Equals k
Difficulty: Medium

[Reference](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/)

## Question
Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

**Note:** The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

**Example 1:**
```
Input: nums = [1, -1, 5, -2, 3], k = 3
Output: 4 
Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
```

**Example 2:**
```
Input: nums = [-2, -1, 2, 1], k = 1
Output: 2 
Explanation: The subarray [-1, 2] sums to 1 and is the longest.
```

**Constraints**
* The array can contain negative values.
* The array can have repeated values.
* `n <= 10^5, k < n`
  Recall the time complexity chart: **algorithms have general size contraints**; that is, _generally_, _O(n^2)_ time algorithms can take a maximum size input of ~5K, and _O(n)_ and _O(n * log(n))_ time algorithms can take a maximum size input of ~1 million.

**Follow Up:**
Can you do it in O(n) time?

## Intuition
This problem can be solved using a HashMap to keep track of all the prefixes.

With the HashMap we can calculate a rolling prefix sum.

## Solution
Given that `n` can be up to 10^5, we know that we cannot use a quadratic time or worse algorithm.

If there were only positive numbers, we could use a sliding window solution, but it does not work with negative numbers.

Instead, we can use the `prefixSum` array of the input, where `prefixSum[i]` is the sum of all the numbers up to the `i`-th number. Using the second example from above, we have:
```javascript
array = [6, 7, 2, 3, -1, 2]
prefixSum = [6, 13, 15, 18, 17, 19]
```

  **This array is useful because it allows us to find the sum of a subarray in constant time: the sum of `array[i:j]` is given by `prefixSum[j] - prefixSum[i]`.**

Indeed, this relationship where:
**JavaScript**
```javascript
Math.sum(array[ i: j]) = prefixSum[ j ] - prefixSum[ i - 1 ]
```
**Python**
```python
sum(array[i:j]) = prefixSum[j] - prefixSum[i-1]
```
is always known to be true given this problem's constraints. Thus, the `prefixSum` array approach is the optimal solution to this problem.

For example, the sum of the 0th-indexed array above from the 4-th element (-1) to the 1st element (7) is 11, which is equal to `prefixSum[-1] - prefixSum[6] = 17 - 6 = 11`.

We can compute the `prefixSum` array in linear time:
```javascript
prefixHash[nums[0]] = 0

for (let i = 1; i < nums.length; i++) {
  nums[i] += nums[i - 1]
  prefixHash[nums[i]] = i
}
```