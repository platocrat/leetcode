class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        memo = dict()

        def dp(i, x):
            if x == 0:
                return 0
            if i > n - x * k:
                return 0
            if (i, x) in memo:
                return memo[(i, x)]

            option1 = sum(nums[i:i+k]) + dp(i+k, x-1)
            option2 = dp(i+1, x)
            memo[(i, x)] = max(option1, option2)

            return memo[(i, x)]

        return dp(0, 3)
