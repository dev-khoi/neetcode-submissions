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
    1,2,3,4
    1,2,3,4,5

    -> 1,2 | 3,4
    reverse other half: 1,2 | 4,3
    merge both:
    1,4,2,3

*/

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        // reverse other half
        
        // traverse into the middlle
        let slow = head;
        let fast = head.next;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse from middle + 1 half
        let middle = slow.next;

        // splitting the list
        slow.next = null;



        // reverse the half
        let reverseList = middle;
        let prev = null
        while(reverseList){
            const temp = reverseList.next;
            reverseList.next = prev;

            prev = reverseList;
            reverseList = temp;
        }


        let secondReverseHalf = prev;
        // merge both 
        const dummyListNode =  new ListNode();
        let curr = dummyListNode

        let firstHalf = head;
        while(firstHalf && secondReverseHalf){
            const temp1 = firstHalf.next;
            const temp2 = secondReverseHalf.next;

            curr.next = firstHalf;
            curr = curr.next;

            curr.next = secondReverseHalf;
            curr = curr.next;

            firstHalf = temp1;
            secondReverseHalf = temp2;
        }



if (firstHalf) {
    curr.next = firstHalf;
}
        return dummyListNode.next;

    }
    
}
