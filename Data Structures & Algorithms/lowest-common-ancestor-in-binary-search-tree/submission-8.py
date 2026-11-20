# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        
        # cases:
        # common ancestor condition: root.val >= p.val and root.val <= q.val
        # if < left (p): move to right
        # if > right (q): move to left

        # 3 cases:
        # q and p on the other sides to each other
        # p and q in the same all the way to left/right
        # p and q on the right, have an upper ancestor
        curr = root
        while curr:
            if curr.val < p.val and curr.val < q.val:
                curr = curr.right
            elif curr.val > p.val and curr.val > q.val:
                curr = curr.left
            else: 
                return curr
        