# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        # bfs
        if not root:
            return []
        queue  = deque([root])
        res = []

        while queue:
            level_length = len(queue)
            for i in range(len(queue)):
                node = queue.popleft()
                
                # If it's the last node in the current level, it's visible from the right
                if i == level_length - 1:
                    res.append(node.val)
                
                # Fix 2: Only append valid children to prevent NoneType errors
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)


        return res