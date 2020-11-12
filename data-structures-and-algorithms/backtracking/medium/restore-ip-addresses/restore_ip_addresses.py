class Solution:
    def restoreIpAddresses(self, s):
        res = []
        dfs(s, 0, "", res)
        return res

def dfs(s, index, path, res):
    if index == 4:
        if not s:
            res.append(path[:-1])
        return # backtracking
    for i in range(1, 4):
        if i <= len(s):
              if int(s[:i]) <= 255:
                  dfs(s[i:], index+1, path+s[:i]+".", res)
              if s[0] == "0": # be careful here (?)
                  break