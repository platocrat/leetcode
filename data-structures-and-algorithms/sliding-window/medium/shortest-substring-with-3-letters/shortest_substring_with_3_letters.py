class Solution:
    def shortestSubstringWith3Letters(self, s: str) -> int:
        return solution(s)

"""
Description: Given a string s consisting of letters a, b and c, return the 
length of the shortest substring containing at least one occurrence of all three
letters (a, b and c). If there isn’t any, return -1.
"""

def solution(s):
    # window type: minimum type window
    # window property: contains at least one of each `a`, `b`, `c`
    # window data structures: HashMap for frequency of letters
    n = len(s)
    l = 0 # l always points to the first element in the window
    r = 0 # r always points to the first element after the window
    counts = defaultdict(int) # counts of `a`, `b`, `c`, in the window
    minLen = math.inf
    while True:
        if counts['a'] > 0 and counts['b'] > 0 and counts['c'] > 0: 
            # window is valid
            minLen = min(minLen, r - l) # r-l is length of window
            counts[s[l]] -= 1
            l += 1
        else: # some count is 0
            if r == n: break
            # if s[r] not in counts: s[r] = 1
            counts[s[r]] += 1
            r += 1
        if minLen == math.inf:
            return -1

    return minLen

