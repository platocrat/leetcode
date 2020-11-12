class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        phone = {
          '2': 'abc', 
          '3': 'def', 
          '4': 'ghi', 
          '5': 'jkl', 
          '6': 'mno', 
          '7': 'pqrs', 
          '8': 'tuv', 
          '9': 'wxyz'
        }
        res = []
        dfs(phone, digits, "", res)
        
        return res

def dfs(phone, digits, path, res):
    if not digits:
        res.append(path)
        return
        
    for c in phone[digits[0]]:
        dfs(phone, digits[1:], path+c, res)