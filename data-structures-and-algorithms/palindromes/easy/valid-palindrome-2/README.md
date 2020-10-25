# 680. Valid Palindrome II
Difficulty: Easy

[Reference](https://leetcode.com/problems/valid-palindrome-ii/)

## Question: 
Given a non-empty string `s`, you may delete at most one character. Judge whether you can make it a palindrome.

**Example 1:**
```
Input: "aba"
Output: True
```

**Example 2:**
```
Input: "abca"
Output: True
Explanation: You could delete the 
character 'c'.
```

**Note:**
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

## Intuition
Since the maximum length of the input string is 50k, we know that for our algorithm to be a valid solution, it must run in better than _O(n^2)_ time. That is, **our algorithm, must run in logarithmic, _O(log(n))_, or linear _O(n)_ time**.

### Reversing an array
In JavaScript, we can use the `.reverse()` array method to reverse an array. 

Thus, to solve this problem, we must first turn the given input string into an array then reverse it, and finally, turn it back into a string to return as the output.

To turn a string into an array in JavaScript, we use the `.split()` string method, and to turn an array into a string by joining each of it's elements with a delimited character, we use the `.join()` array method.

So far, our algorithm will look like this:
```js
function validPalindrome(string) {
  if (string == null) {
    return false
  } else {
    let reversedString = string.split("").reverse().join("")
    
    if (string == reversedString) {
      return true
    } else {
      for (let char in string) {
        
      }
    }
  }
}
```

### Deleting at most 1 character
We will delete a character prior to reversing the string, so we know that logic must go under our first `else` statement.

Now, to check whether we can still make a palindrome by deleting 1 character, we must perform this check after verified that reversing the input string is not a palindrome.

#### How to select the character to delete
The only way to know if a character can be deleted to create a palindrome is to process each element in the array until we find the appropriate character. This will of course be done in _O(n)_ time. 

> **Keep in mind the time complexity of reversing the string**

## Weekly Coding Challenge Review
```py
class Solution:
    def validPalindrome(self, s: str) -> bool:
          return solution(s)

def solution(s)
    l, r = 0, len(s)-1

    while l < r:
        if s[l] != s[r]: 
            return isPalindrome(s[l:r]) or isPalindrome(s[l+1: r+1])
        l += 1
        r -= 1

    return True

# O(n) time, and O(n) space
def isPalindrome(s):
    return s == s[::-1]

# O(n) time, and O(1) space
def isPalindrome(s):
    l, r = 0, len(s)-1

    while l < r:
        if s[l] != s[r]: return False
        l += 1
        r -= 1
    return True
```

Solution 2:
```py
class Solution:
    def validPalindrome(self, s: str) -> bool:
          return solution(s)

def solution(s)
    l, r = 0, len(s)-1

    while l < r:
        if s[l] != s[r]: 
            return isPalindrome(s, l, r-1) or isPalindrome(s, )
        l += 1
        r -= 1

    return True

# O(n) time, and O(n) space
def isPalindrome(s):
    return s == s[::-1]

# O(n) time, and O(1) space
def isPalindrome(s):
    l, r = 0, len(s)-1

    while l < r:
        if s[l] != s[r]: return False
        l += 1
        r -= 1
    return True
```