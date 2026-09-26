class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        memo = dict()
        max_sum = 0
        sum = [0]
        left_pos = [0] * n
        right_pos = [n - k] * n
        answer = [0, 0, 0]

        for i in nums:
            sum.append(sum[-1] + i)

        # DP for starting index of the left max sum interval
        total = sum[k] - sum[0]

        for i in range(k, n):
            if sum[i + 1] - sum[i + 1 - k] > total:
                left_pos[i] = i + 1 - k
                total = sum[i + 1] - sum[i + 1 - k]

            else:
                left_pos[i] = left_pos[i - 1]

        # DP for starting index of the right max sum interval
        total = sum[n] - sum[n - k]

        for i in range(n - k - 1, -1, -1):
            if sum[i + k] - sum[i] > total:
                right_pos[i] = i
                total = sum[i + k] - sum[i]

            else:
                right_pos[i] = right_pos[i + 1]

        # Test all possible middle interval
        for i in range(k, n - 2 * k + 1):
            l = left_pos[i - 1]
            r = right_pos[i + k]
            total = (sum[i + k] - sum[i]) + \
                (sum[l + k] - sum[l]) + (sum[r + k] - sum[r])

            if total > max_sum:
                max_sum = total
                answer = [l, i, r]

        return answer
