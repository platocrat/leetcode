def findTarget1(self, root: TreeNode, k: int) -> bool:
    sorted_array = []

    def inorder(root, sorted_array):
        if not root:
            return
        inorder(root.left, sorted_array)
        sorted_array.append(root.val)
        inorder(root.right, sorted_array)
    inorder(root, sorted_array)
    left = 0
    right = len(sorted_array) - 1
    while (left < right):
        targetSum = sorted_array[left] + sorted_array[right]
        if (targetSum == k):
            return True
        elif (targetSum < k):
            left += 1
        else:
            right -= 1
    return False

    # Runtime: 40.33%
    # Space: 6.54%

    # Cmd + ]
    # Cmd + [
    # Tab 4

# Approach 1) Hash set:
# 1) Keep values that you visited
# 2) For further numbers, check target - number in hash
# 3) How to traverse?
#   BFS (queue) -> hash, Inorder

# Approach 2) Binary property?
# -> sorted array -> binary search applicable?
# [1,2,3,4,5,6]
# Inorder -> Array -> Two Pointer

# Space -> O(N)
# Time -> O(N)


def findTarget(self, root: TreeNode, k: int) -> bool:
