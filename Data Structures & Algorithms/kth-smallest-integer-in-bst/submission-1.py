# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        # 2 solutions
        # iterative / inorder dfs (left - root - right)

        # iterative
        stack = []
        n = 0   
        curr = root
        
        # iterative solution:
        # traverse and add to stack
        # reached the end -> n++
        # if traverse index (n) == k: found the node

        while curr or stack:
            # traverse left side first to add to the tree
            while curr:
                stack.append(curr)
                curr = curr.left
            
            curr = stack.pop()
            n += 1
            if n == k:
                return curr.val
            
            curr = curr.right
        return 
            