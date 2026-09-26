class Solution:
    def diameterOfBinaryTree(self, root):
        self.max = 0

        def maxDepth(node):
            if not node: return 0

            left = maxDepth(node.left)
            right = maxDepth(node.right)

            self.max = max(self.max, left + right)

            return max(left, right) + 1

        maxDepth(root)
        return self.max