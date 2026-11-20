/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const queue = [root]
        const res = []
        while(queue.length > 0){
            const len = queue.length
            let rightSide= null;
            for(let i = 0; i < len; i++){
                const node = queue.shift()
                if(node){
                    rightSide = node
                    queue.push(node.left)
                    queue.push(node.right)
                }
            }       
            if(rightSide){
                res.push(rightSide.val)

            }
        }

        return res;
    }
}
