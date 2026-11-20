"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        # deep copy of the linked list 
        # core problem cannot assign the randomness without creating the node 
        # 2 iteration
        # 1st is to create all the nodes and next
        # 2nd is to assign the randomness

        # create a map {oldNode: newNode}

        oldToCopy = collections.defaultdict(lambda: Node(0))

        oldToCopy[None] = None

        curr = head
        while curr:
            oldToCopy[curr].val = curr.val
            oldToCopy[curr].next = oldToCopy[curr.next]
            oldToCopy[curr].random = oldToCopy[curr.random]
            curr = curr.next
        return oldToCopy[head]
