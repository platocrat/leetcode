# Nil's implementation
# Reference to other Pathrise solutions for this problem:
# https://docs.google.com/document/d/1Eyhty2ZdoWEYAh_p6Ag1xZOplqTRQD1pBXqpx_tuFsM/edit
# Approach: Sliding Window
# Time complexity:  O(k)
# Space complexity:  O(1)
def maxScore(self, cardPoints: List[int], k: int) -> int:
    """
    The selected elements make up a prefix and a suffix. That means the non-selected
    elements make up a continguous subarray. Maximizing the picked elements is the
    same as minimizing the non-picked elements. So we can reframe the problem as 
    follows:

    Given an array, cardPoints, of length n and a value k, find the subarray of 
    length k with the maximum sum.
    """
    n = len(cardPoints)
    windowLen = n - k  # make suffix length the window length.
    windowSum = sum(cardPoints[i] for i in range(n - k))  # get prefix sum.
    minSum = windowSum  # store prefix window sum.

    # for suffix, get the suffix window's sum then determine max sum from
    # previously stored prefix sum and suffix sum.
    for i in range(windowLen, n):
        windowSum += cardPoints[i]   # sum up suffix values
        # remove prefix values from window sum
        windowSum -= cardPoints[i - windowLen]
        minSum = min(minSum, windowSum)

    return sum(cardPoints) - minSum
