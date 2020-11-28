class Solution:
    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
        return solution(A, B, C, D)

def solution(A, B, C, D):
    ABcounts = defaultdict(int)
    for val1 in A:
        for val2 in B:
            ABcounts[val1+val2] += 1
    count = 0
    for val3 in C:
        for val4 in D:
            count += ABcounts[-]