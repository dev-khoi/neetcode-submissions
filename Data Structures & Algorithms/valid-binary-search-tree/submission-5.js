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
     * @return {boolean}
     */
    isValidBST(root) {
        const validBST=  (node, min, max) => {
            if(!node){
                return true;
            }
if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
                return false;
            }
            return validBST(node.left, min, node.val) && validBST(node.right, node.val, max)
        } 

        return validBST(root,null,null)
    }
}
