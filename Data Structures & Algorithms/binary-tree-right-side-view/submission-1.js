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
        if(!root){
            return [];
        }
        const res = []
        const rightDfs = (root,depth) => {
            if(!root){
                return;
            } 
            if(res.length === depth){
            res.push(root.val);

            }
            rightDfs(root.right, depth + 1);
                        rightDfs(root.left, depth + 1);

            return;
        }
        rightDfs(root, 0)
        return res;
    }
}
