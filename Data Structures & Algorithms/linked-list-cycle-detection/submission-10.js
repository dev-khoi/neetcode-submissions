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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head || !head.next){
            return false
        }
        let curr = head
        let fast = head.next
        while(curr && fast && fast.next && fast.next.next){
            if(fast.val == curr.val) return true
            curr = curr.next
            fast = fast.next.next
        }
        return false
    }
}
