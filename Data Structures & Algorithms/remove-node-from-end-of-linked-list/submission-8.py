# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummyList = ListNode(0, head)
        
        slow = dummyList
        fast = head

        while n != 0:
            fast = fast.next
            n-=1

        while fast != None:
            fast = fast.next
            slow = slow.next

        slow.next = slow.next.next

        return dummyList.next


        