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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if(!root){
            return null;
        }

        const arr = [];
        const dfs = (root) => {
            if(!root){
                return;
            }
                arr.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root)
        arr.sort((a,b) =>a-b)
        console.log(arr)
        return(arr[k- 1])
    }

}
