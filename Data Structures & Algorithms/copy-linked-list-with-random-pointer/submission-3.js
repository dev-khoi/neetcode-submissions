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
        // map (val: random);
        // for h of head, 
        // map h.val : h.rad
        // retrieve
        const randomMap = new Map();
        randomMap.set(null,null)
        let curr = head;
        while(curr){
            let copy =  new Node(curr.val)
            randomMap.set(curr, copy);
            curr = curr.next;
        }

        curr = head;
        while(curr){
             const copy = randomMap.get(curr);
            copy.next = randomMap.get(curr.next)
            copy.random = randomMap.get(curr.random)
            curr = curr.next;
        }
        return randomMap.get(head)

    }
}
