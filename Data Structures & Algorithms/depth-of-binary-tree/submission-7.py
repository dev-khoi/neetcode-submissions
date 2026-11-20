# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # iterative dfs
        if not root:
            return 0 

        node = deque([[root, 1]])
        res = 1
        while node:
            root, depth = node.pop()
            res = max(res, depth)
            if root.left:
                node.append((root.left, depth + 1))
            if root.right:
                node.append((root.right, depth + 1))

        return res