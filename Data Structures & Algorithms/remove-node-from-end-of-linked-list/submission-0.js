/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) { 
        let dummy = {val:0, next: head};
        let slow = dummy, fast = head;
        // distance to the end
        for(let i = 0; i < n; i++){
            fast= fast.next;
        }

        while(fast){
            slow = slow.next;
            fast = fast.next;
        } 

        slow.next = slow.next.next;

        return dummy.next
    }
}
