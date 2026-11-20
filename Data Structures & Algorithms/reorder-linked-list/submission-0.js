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
     * @return {void}
     */
    reorderList(head) {   
        //  slow pointer and fast pointer
        let slow = head;
        let fast = head;

        // traverse to middle of array
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse the other half
        let curr = slow;
        let re = null;
        while(curr){
            let temp = curr.next;
            curr.next = re;
            re = curr;

            curr = temp
        }
        
        re = re;

        // merge array
        let first = head;
        while(re.next){
            let temp1= first.next;
            let temp2 = re.next;

            first.next = re;
            re.next = temp1;

            first = temp1;
            re = temp2;
        }

    }
}
