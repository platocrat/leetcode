# 5. Longest Palindromic Substring
Difficulty: Medium

[Reference](https://leetcode.com/problems/longest-palindromic-substring/)

## Question
Given a string `s`, return the _longest palindromic substring_ in `s`.

## Intuition

## Solutions
### Nil's first solution
#### Python
```py
class Solution:
    def longestPalindrome(self, s: str) -> str:
        return solution(s)

def solution(s):
    res = (0, 1)  # means substring
    n = len(s)

    for i in range(n):
        l, r = i, i

        while l >= 0 and r < n and s[l] == s[r]:
            pal_len = r-l+1
            
            if pal_len > res[1]-res[0]:
                res = (l, r+1)
            
            l -= 1
            r += 1

        l, r = i, i+1

        while l >= 0 and r < n and s[l] == s[r]:
            pal_len = r-l+1

            if pal_len > res[1]-res[0]:
                res = (l, r+1)

            l -= 1
            r += 1

    return s[res[0]:res[1]]
"""
Manacher's algorithm: O(n)          (don't need to know this for interviews)

- There are O(n^2) substrings
- Checking if a substring is palindrome takes O(n)
- isPalindrome for each substring: O(n^3)

Trying to grow a palindrome: O(n)
Trying to grow from all indices: O(n^2)
"""
```
