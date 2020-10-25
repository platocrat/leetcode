# 132. Palindrome Partitioning II
Difficulty: Hard

[Reference](https://leetcode.com/problems/palindrome-partitioning-ii/)

## Question
Given a string `s`, partition `s` such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of `s`.

## Intuition
This question is very similar to _131. Palindrome Partitioning_.

**However, the hint that we need to use dynamic programming here is that we must return "minimum cuts", and that the max input size is 2,000**

## Solutions
### Dynamic Programming
#### Python (optimized)
Using the code from the solution to _131. Palindrome Partitioning_:
```py
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        return solution(s)

"""
DP Idea:
Consider all the palindromes that start at the beginning s
for each of them, we are left with a suffix of s

Subproblems: suffixes of s
Each subproblem has its own solution

cuts(i): # of cuts that we need to partition s[i:n]

base case:
cuts(n) = 0 # empty string, no cuts needed
cuts(n-1) = 0 # single char, no cuts needed

general case (i < n-1):
cuts(i): for all j such that s[i:j+1] is palindrome # 
    min(1 + cuts(j)) over all j such that s[i:j+1] is palindrome
"""

def solution(s):
    res = []
    n = len(s)

    memo2 = dict()
    def cuts(i):
        if i == n or i == n-1: return 0
        res = float('inf')

        if i in memo2: return memo2[i]

        if isPalindrome(i, n-1): res = 0
        else:
          for j in range(i, n):
              if isPalindrome(i, j):
                  res = min(res, 1 + cuts(j+1))

        memo2[i] = res
        return res


    memo = dict() # we are not repeating any isPalindrome computation
    # memo[(l, r)] is the result of isPalindrome(l,r)
 
    def isPalindrome(s, l, r):
        if l >= r: return True # 0 or 1 chars
        if s[l] != s[r]: return False
        
        if (l, r) in memo: return memo[(l, r)]
        memo[(l,r)] = isPalindrome(l+1, r-1)
        
        return memo[(l,r)]

    return cuts(0) 
```