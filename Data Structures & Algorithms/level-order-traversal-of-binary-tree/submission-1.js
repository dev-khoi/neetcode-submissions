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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root){
            return [];
        }
        const queue = [root]
        const res= []

        while(queue.length > 0){
            const len = queue.length
            const smallPart = []
            for(let i = 0; i < len; i++){
                const item = queue.shift()
                smallPart.push(item.val)

                if(item.left) queue.push(item.left)
                if(item.right) queue.push(item.right)
            }

            res.push(smallPart)
        }
        return res;
    }
}
