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
        // define the map of all of the nodes value
        const map = new Map();
        map.set(null, null)
        let curr = head;

        while(curr){
            map.set(curr, new Node(curr.val, null, null))
            curr = curr.next;
        }
        // define each next and random
        curr = head;

        while(curr){
            const currentNode = map.get(curr)
            currentNode.next = map.get(curr.next);
            currentNode.random = map.get(curr.random);

            curr = curr.next;
        }

        return map.get(head)
        // time: O(n)
        // space O(n)
    }
}
