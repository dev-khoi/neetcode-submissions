# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        if not head or not head.next:
            return
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        middle = slow.next
        slow.next = None

        # reverse from middle to up
        prev = None
        while middle:
            temp = middle.next
            middle.next = prev
            prev = middle
            middle = temp



        reverseList = prev
        curr = head
        # grouping  
        first = head
        second = reverseList
        while second:
            temp1 = first.next
            temp2 = second.next

            # Interleave the nodes
            first.next = second
            second.next = temp1

            # Move pointers forward
            first = temp1
            second = temp2

