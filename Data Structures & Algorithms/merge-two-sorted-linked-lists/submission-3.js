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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode()
        let dummyCurr = dummy
        let curr1 = list1, curr2 = list2

        while(curr1 && curr2){
            if (curr1.val < curr2.val){
                dummyCurr.next = curr1
                curr1 = curr1.next
            }else{
                dummyCurr.next = curr2
                curr2 = curr2.next
            }
            dummyCurr = dummyCurr.next
        }
        if(curr1){
            dummyCurr.next = curr1
        }else if (curr2){
            dummyCurr.next = curr2
        }

        return dummy.next
    }
}
