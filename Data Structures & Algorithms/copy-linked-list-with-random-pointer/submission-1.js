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
        const nodeMap = new Map();
        nodeMap.set(null, null);
        let curr = head;
        while(curr){
            let copy = new Node(curr.val);
            nodeMap.set(curr, copy)
            curr = curr.next;
        }

        curr = head;
        while(curr){
             const copy = nodeMap.get(curr);
            copy.next = nodeMap.get(curr.next);
            copy.random = nodeMap.get(curr.random);
            curr = curr.next;
        }
        return nodeMap.get(head)

    }
}
