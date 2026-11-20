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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const queue = [[p,q]]
        while(queue.length > 0){
            const [left, right] = queue.pop()
            if(!left && !right) continue;

            if(!left || !right || left.val !== right.val){
                return false;
            }
            queue.unshift([left.left , right.left])
                        queue.unshift([left.right , right.right ])

        }
        return true;
    }
}
