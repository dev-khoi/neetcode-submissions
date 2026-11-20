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
            const [leftTree, rightTree] = queue.pop()
            if(!leftTree && !rightTree) continue;
            if(!leftTree || !rightTree || leftTree.val !== rightTree.val ){
                return false;
            }

            queue.unshift([leftTree.left, rightTree.left])
            queue.unshift([leftTree.right, rightTree.right])
        }
        return true;
    }
}
