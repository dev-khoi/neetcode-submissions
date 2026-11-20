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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // LOGIC
        /*
            sum = l1 + l2 + carry

            carry shoul dalways be recal = 
            carry = Math.floor(sum / 10)
            sum should be recal with sum % 10

            add to the new linked list

            
        */
        const dummyList = new ListNode();
        let curr = dummyList;
        let carry = 0;
        // loop
        while(l1 || l2 || carry){
            let val1 = l1 ? l1.val : 0;
            let val2 = l2 ? l2.val : 0;

            let sum = val1 + val2 + carry;
            carry = Math.floor(sum/10);
            sum %= 10 // get reminder (15%10 = 5, 5%10=5)
    
            curr.next = new ListNode(sum);

            curr = curr.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return dummyList.next;
        // 
    }
}
