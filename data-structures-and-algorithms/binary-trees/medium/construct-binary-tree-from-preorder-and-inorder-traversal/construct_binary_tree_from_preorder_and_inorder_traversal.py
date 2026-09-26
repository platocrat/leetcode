from collections import deque

class Solution:
    def buildTree(self, preorder, inorder):
        inor_dict = {}
        
        for i, num in enumerate(inorder):
            inor_dict[num] = i
        
        pre_iter = iter(preorder)
        
        def helper(start, end):
            if start > end:return None
        
            root_val = next(pre_iter)
            root = TreeNode(root_val)
            idx = inor_dict[root_val]
        
            root.left = helper(start, idx-1)
            root.right = helper(idx+1, end)
        
            return root
        
        return helper(0, len(inorder) - 1)