class Solution:
    def is_balanced(self, root):
        return self.get_height(root) != -1

    def get_height(self, root):
        if not root: return 0

        left = self.get_height(root.left)
        right = self.get_height(root.right)

        # post-processing
        if left == -1 or right == -1: return -1
        if abs(left - right) > 1: return -1

        return max(left, right) + 1