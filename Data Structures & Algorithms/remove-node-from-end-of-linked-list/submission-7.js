/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */


/*
[1,2,3,4], n = 2

[5] n = 1
*/

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(!head){
            return;
        }
        const dummyList = new ListNode(0, head)
        let slow = dummyList;
        let fast = dummyList;

        // traverse fast pointer n+1 times 
        // so that slow = target - 1 and fast = target +1
        // slow.next = fast
        while(n >= 0 ){
            fast = fast.next;
            n--;
        }

        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next =slow.next.next;

        return dummyList.next;
    }
}
