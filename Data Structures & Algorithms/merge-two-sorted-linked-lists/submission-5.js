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
        // create the head of the sorted list
        const dummyList = new ListNode()
        let head = dummyList;

        // while each of the list didnt run out of the node
        while(list1 && list2){
            // if list1 node < list2 node
            if(list1.val < list2.val){
                // add list1 node into sorted list
                head.next = list1;
                list1 = list1.next;
            }
            // else
            else{
                // add list2...
                head.next = list2;
                list2 = list2.next;
            }
            head =  head.next;
            }
        // if there is still nodes left in 1 of the list
        if(list1){
            head.next = list1;
        }
        if(list2){
            head.next = list2;
        }
            // append to the sorted list
            

        // return the head of the sorted list
        return dummyList.next;
    }
}
