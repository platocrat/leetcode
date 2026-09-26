# 689. Maximum Sum of 3 Non-Overlapping Subarrays
[Reference](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/)

## Question
Given an array of integers and a number k, find the maximum value that you can get by adding the integers in 3 non-overlapping and contiguous subarrays of length k.

**Example 1**:
```
Input: [1,2,3,4,4,5,5], k = 2
Output: 23. The subarrays are [2,3], [4,4], [5,5]
```

**Example 2**:
```
Input: [2,1,3,4,4,5,5], k = 2
Output: 22. The subarrays are [1,3], [4,4], [5,5]
```

**Constraints**:
Input array has length of at least 3k, where
```
3*k <= n <= 1000
```

## Intuition
Given the input constraint, we know that the optimal solution must have a time complexity of at worst _O(n^2)_.

Since it looks like the problem always has a solution, we don't need an initial check to ensure the array is a length of at least 3k.

For the "non-overlapping" part, we can simply keep track of it while we're looping through the array. 

```js
for (let i in nums) {
  
}
```

## Solution
### Dynamic Programming (return only the sum of the 3 subarrays)
```py
def maxSumOfThreeSubarrays(nums, k) {
  n = len(nums)
  memo = dict()

  def dp(i, x) {
    if(x == 0 return 0
    if(i > n - x * k return 0
    if (i, x) in memo return memo[(i, x)]
    
    option1 = sum(nums[i:i+k]) + dp(i+k, x-1)
    option2 = dp(i+1, x)
    memo[(i, x)] = max(option1, option2)

    return memo[(i, x)]
  }

  return dp(0, 3)
}
```
