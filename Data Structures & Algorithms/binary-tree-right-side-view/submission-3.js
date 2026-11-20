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
        const res= []
        const rightDfs = (node, i) => {
            if(!node){
                return;
            }
            if(res.length === i){
                res.push(node.val)
            }
            rightDfs(node.right, i+1)
            rightDfs(node.left, i+1);

            return;
        }
        rightDfs(root, 0)

        return res;
    }
}
