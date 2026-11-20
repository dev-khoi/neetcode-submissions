# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        
        res = []
        queue = [root]

        # the idea: we have a queue, keep pushing children of the node in
        def bfs():
            while queue:
                # take out the node
                qLen = len(queue)
                level = []

                for _ in range(qLen):
                    node = queue.pop(0)

                    if node:
                        level.append(node.val)
                        queue.append(node.left)
                        queue.append(node.right)
                if level:
                    res.append(level)
        bfs()
        
        return res

