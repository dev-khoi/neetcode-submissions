class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        
        const res = []

        const dfs = (i, total, subset) => {
            // combination have 2 base cases
            if(total === target){
                res.push([...subset])
                return
            }
            if(i===nums.length ||  total > target){
                return;
            }

            subset.push(nums[i])
            // not i+1 because we are trying to use that number multiple time
            dfs(i, total + nums[i], subset)

            subset.pop()
            dfs(i+1, total, subset)
        }
        dfs(0, 0, [])

        return res
    }
}
