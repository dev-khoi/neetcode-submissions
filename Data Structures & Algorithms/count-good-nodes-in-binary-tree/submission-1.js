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
        let res = 0;
        const dfs = (node, goodVal) => {
            if(!node){
                return;
            }if(node.val >= goodVal || goodVal == null){
                res++;
                goodVal = node.val
            }
            
            dfs(node.left,goodVal)
            dfs(node.right, goodVal)
        }

        dfs(root, null)
        return res;
    }
}
