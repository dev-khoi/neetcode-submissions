// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        // linked list -> deep copy
        const listMap = new Map()
        listMap.set(null, null)
        let curr = head
        while(curr){
            listMap.set(curr, new Node(curr.val, null, null))
            curr = curr.next;
        }

        curr = head
        while(curr){
            const node = listMap.get(curr)
            node.next = listMap.get(curr.next)
            node.random = listMap.get(curr.random)

            curr= curr.next
        }

        return listMap.get(head)
    }
}
