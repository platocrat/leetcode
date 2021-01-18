from heapq import heappush

""" See discussion in:
https://leetcode.com/problems/sliding-window-median/discuss/262689/Python-Small-and-Large-Heaps
"""


class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        return solution(nums, k)


def solution(nums, k):
    if k == 1:
        return nums

    # window type: fixed-length window
    # window data structures: 2 heaps, 'small' and 'large'
    # such that large contains all the element >= median in window
    # and small contains the rest
    # if k is even: both have size k/2
    # if k is odd: larger has one more element

    # in Python, heaps are min-heaps by default
    # for a max-heap, we negate the values
    small = []
    large = []

    # how to remove the element nums[l] from the heaps?
    # it may NOT be the root of one of the heaps
    # trick: record, with each value, the index in the input
    # this will allow us to leave "expired" elements in the heap
    # and we can detect them by looking at their index

    for i in range(k):
        heappush(small, (-nums[i], i))  # max heap

    # if k is odd, large has one more elem than small
    largeSize = k//2 + (1 if k % 2 == 1 else 0)
    for _ in range(largeSize):
        move(small, large)

    res = []
    res.append(median(small, large, k))
    for r in range(k, len(nums)):

        # add nums[r] to one of the heads
        if nums[r] >= large[0][0]:
            heappush(large, (nums[r], r))
            if nums[r-k] <= large[0][0]:  # if heaps are "unbalanced"
                move(large, small)
        else:
            heappush(small, (-nums[r], r))
            if nums[r-k] >= large[0][0]:  # if heaps are "unbalanced"
                move(small, large)

        # remove any elements before nums[r-k+1]
        while small[0][1] <= r-k:
            heappop(small)
        while large[0][1] <= r-k:
            heappop(large)

        res.append(median(small, large, k))
    return res


def move(h1, h2):
    # pop from one heap and push to the other
    num, i = heappop(h1)
    heappush(h2, (-num, i))  # flip between min-heap and max-heap


def median(small, large, k):
    if k % 2 == 0:
        # '-' because we flipped the values
        return (-small[0][0] + large[0][0]) / 2
    return large[0][0]
