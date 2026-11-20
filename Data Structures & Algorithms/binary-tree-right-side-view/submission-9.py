# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        # create the res
        res = []
        queue = deque([root])
        
        #  traverse queue
        while queue:
            level = []
            qlen = len(queue)
            rightside = None
            # getting the rightmost
            # iterating to the last element to assign to rightside
            for _ in range(qlen):
                node = queue.popleft()

                if node:
                    rightside = node.val
                    if node.left:  queue.append(node.left)
                    if node.right: queue.append(node.right)
            # perform on rightside node
            if rightside: 
                res.append(rightside)

        return res