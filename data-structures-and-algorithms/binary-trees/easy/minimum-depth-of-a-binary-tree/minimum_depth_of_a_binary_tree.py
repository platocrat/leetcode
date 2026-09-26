from collection import deque

class Solution:
    # calculating the minimum depth is a hint to use a level-order traversal
    def min_depth(self, root):
        if not root: 
            return []
        else:
            queue = deque([(1, root), ])

        while queue:
            depth, root = queue.popleft()
            children = [root.left, root.right]

            if not any(children):
                return depth
              
            for child in children:
                if child:
                    queue.append((depth + 1, child))