class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []  
        const subset = []
        const length = nums.length
        const dfs = (i) => {
            // base case (usually used the index):
            if(i === length){
                // shallow copying because a = b is reference pinting
                res.push([...subset])
                return;
            }

            // decision to include 
            subset.push(nums[i])
            dfs(i+1)

            // decision not to include (because subset already has the value)
            // when we pop out it will not have it and dfs for the next index
            subset.pop()
            dfs(i+1)
        }
        dfs(0)
        return res
    }
}
