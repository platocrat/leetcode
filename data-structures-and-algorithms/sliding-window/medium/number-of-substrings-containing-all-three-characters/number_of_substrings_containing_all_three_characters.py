class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        return solution(s)

def solution(s):
    # window type: minimum type window
    # window property: contains at least one of each `a`, `b`, `c`
    # window data structures: HashMap for frequency of letters
    n = len(s)
    l = 0 # l always points to the first element in the window
    r = 0 # r always points to the first element after the window
    counts = defaultdict(int) # counts of `a`, `b`, `c`, in the window
    res = 0

    while True:
        if counts['a'] > 0 and counts['b'] > 0 and counts['c'] > 0: 
            # window is valid
            res += n-r+1 ## account for substrings from s[l:r] to s[l:n]

            # shrink window by remvoving s[l]
            counts[s[l]] -= 1
            l += 1
        else: # some count is 0
            if r == n: break

            # grow window by adding s[r]
            counts[s[r]] += 1
            r += 1

    return res