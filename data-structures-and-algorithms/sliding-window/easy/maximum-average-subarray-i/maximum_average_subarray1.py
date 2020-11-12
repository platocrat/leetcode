class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        return solution(nums, k)

def solution(nums, k):
    windowSum = sum(nums[i] for i in range(k))
    maxSum = windowSum
    for r in range(k, len(nums)):
        windowSum += nums[r]
        windowSum -= nums[r-k]
        maxSum = max(maxSum, windowSum)

    return maxSum/k