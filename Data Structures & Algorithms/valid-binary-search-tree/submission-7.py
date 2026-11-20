# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        # top down approach
        # checking each node with the left and right
        # start the left and right at infinite 
        # and then iterate

        
        def dfs(root, left, right):
            # null check
            if not root:
                return True
            # update answer
            if not (left < root.val < right):
                return False
            # left right
            left = dfs(root.left, left, root.val)
            right = dfs(root.right, root.val, right)
            # return (optional)
            return left and right        
    
        return dfs(root, float("-inf"),float("inf"))
