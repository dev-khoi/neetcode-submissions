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
     * @return {number}
     */
    goodNodes(root) {
        if(!root){
            return 0;
        }

        const goodNodesCount = (node, maxVal) => {
            if(!node){
                return 0;
            }
            let res = (node.val >= maxVal) ? 1 : 0;
        maxVal = Math.max(maxVal, node.val);

            res += goodNodesCount(node.left, maxVal);
            res += goodNodesCount(node.right, maxVal); 
            return res;
        }
       

        return goodNodesCount(root, root.val);
    }
}
