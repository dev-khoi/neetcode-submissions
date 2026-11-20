# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        # dfs style ?
        # p, q are different
        # binary search tree: right more than left
        # key thing: utilize from the root,
        if not root:
            return
        
        if root.val > p.val and root.val > q.val:
            return self.lowestCommonAncestor(root.left, p, q)
        
        elif root.val < p.val and root.val < q.val:
            return self.lowestCommonAncestor(root.right, p, q)

        return root

        # if (p > root < q) or (q > root < q) -> return

        # if root < both node -> right

        # if the left >= both nodes: return

        # if the left < node: wrong turn -> go to the right
        