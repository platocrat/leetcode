# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        # Save the depth of the first node.
        self.recorded_depth = None
        self.is_cousin = False

    def dfs(self, node, depth, x, y):
        if node is None:
            return False

        # Don't go beyone the depth restricted by the first node found.
        if self.recorded_depth and depth > self.recorded_depth:
            return False

        if (node.val == x) or (node.val == y):
            if self.recorded_depth == None:
                # Save depth for the first node.
                self.recorded_depth = depth

            # Return true, if the second node is found at the same depth.
            return self.recorded_depth == depth

        left = self.dfs(node.left, depth + 1, x, y)
        right = self.dfs(node.right, depth + 1, x, y)

        # recordedDepth != depth + 1 would ensure node x and y are not immediate
        # child nodes, otherwise they would become siblings.
        if (left and right) and (self.recorded_depth != depth + 1):
            self.is_cousin = True

        return left or right

    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
        self.dfs(root, 0, x, y)
        return self.is_cousin
