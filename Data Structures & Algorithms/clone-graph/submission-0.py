"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        # 1 index
        # index: neighbors
        # return a deep copy of the graph 
                

        # 2 passes: use a map to reference the node 
        oldToNew = {}


        def dfs(node):
            # base case: found it 
            if node in oldToNew:
                return oldToNew[node]

            # create a copy 
            copy = Node(node.val)
            oldToNew[node] = copy

            # exploration
            for nei in node.neighbors:
                copy.neighbors.append(dfs(nei))
            return copy

        return dfs(node) if node else None
        # # 1st: reconstruct all the nodes
        # for n in node:
        #     # value : actual node
        #     cloneN = Node(n.val)
        #     nodeList[n] = cloneN 

        # # 2nd: connection between them  
        # for n in node:
        #     for neighborNode in node.neighbors:
        #         nodeList[n].neighbors.append(neighborNode)

        # return nodeList[1]