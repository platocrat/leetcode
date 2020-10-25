# 131. Palindrome Partitioning
Difficulty: Medium

[Reference](https://leetcode.com/problems/palindrome-partitioning/)

## Question
Given a string `s`, partition `s` such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of `s`.

## Intuition
Finding how to break the string into subtrings

> **BIG NOTE**, pay attention to the word **"all"**! This is a big hint for backtracking
> **small input size** -> backtracking hint!

This kind of question only works for small input sizes.

## Solutions
### Backtracking
Backtracking idea: 
- Find all the palindromes that at the beginning
- For each one, remove it from the string and recursively break up the rest of the string

Example case:
"aaaaa"

All the options for the first palindrome:
`a|aaaa, aa|aaa, aaa|aa, aaaa|a, aaaaa|`
`a|aaaa -> a|a|aaa, a|aa|aa, a|aaa|a, a|aaaa|`
#### Python (unoptimized)
```py
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        return solution(s)

def solution(s):
    res = []
    n = len(s)

    def backtracking(palList, i):
        if i == n:
            res.append(palList[:])
        else:
            # find all the palindroes that start at index i (brute force)
            for j in range(i, n):
                if isPalindrome(s, i, j): # recursive call
                    # found palindrome, add it to the palList and recurse for 
                    # the rest of the call
                    palList.append(s[i:j+1])
                    backtracking(palList, j+1)
                    # back from backtracking call, if we make changes while 
                    # backtracking, we need to undo/remove the change.
                    palList.pop() # remove the last palindrome s[i:j+1]

    backtracking([], 0)
    return res 

# From solution to LeetCode 5. (previous problem)
# O(n) time, and O(1) space
def isPalindrome(s, l, r):
    while l < r:
        if s[l] != s[r]: return False
        l += 1
        r -= 1

    return True
```

#### Python (optimized)
```py
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        return solution(s)

def solution(s):
    res = []
    n = len(s)

    def backtracking(palList, i):
        if i == n:
            res.append(palList[:])
        else:
            # find all the palindroes that start at index i (brute force)
            for j in range(i, n):
                if isPalindrome(s, i, j): # recursive call
                    # found palindrome, add it to the palList and recurse for 
                    # the rest of the call
                    palList.append(s[i:j+1])
                    backtracking(palList, j+1)
                    # back from backtracking call, if we make changes while 
                    # backtracking, we need to undo/remove the change.
                    palList.pop() # remove the last palindrome s[i:j+1]


    memo = dict() # we are not repeating any isPalindrome computation
    # memo[(l, r)] is the result of isPalindrome(l,r)
 
    def isPalindrome(s, l, r):
        if l >= r: return True # 0 or 1 chars
        if s[l] != s[r]: return False
        
        while l < r:
            if s[l] != s[r]: return False
            if (l, r) in memo: return memo[(l, r)]
            memo[(l,r)] = isPalindrome(l+1, r-1)
            return memo[(l,r)]

    backtracking([], 0)
    return res 
```