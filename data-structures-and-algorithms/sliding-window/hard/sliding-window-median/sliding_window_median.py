class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        return solution(nums, k)

def solution(nums, k):
    if k == l: return nums
    small, large = [], []
    for i in range(k):
        heappush(small, (-nums[i], i)) # max heap

    # if k is odd, large one has one more elem than small
    largeSize = k//2 + (1 if k%2 == 1 else 0)
    for _ in range(largeSize):
        move(small, large)

    res = []
    res.append(median(small, large, k))
    for i in range(k, len(nums)):

        # add nums[i]
        if nums[i] >= large[0][0]:
            heappush(large, (nums[i], i))
            if nums[i-k] <= large[0][0]:
                move(large, small)
            else:
                heappush(small, (-nums[i], i))
                if nums[i-k] >= large[0][0]:
                    move(small, large)