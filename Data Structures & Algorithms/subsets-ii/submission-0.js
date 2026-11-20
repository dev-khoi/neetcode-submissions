class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
nums.sort((a, b) => a - b)
        const res = []
        const subset = []

        const dfs = (i)=> {
            if(i === nums.length){
                return res.push([...subset])
            }

            subset.push(nums[i])
            dfs(i+1)

            subset.pop()
            while(i < nums.length -1 && nums[i] === nums[i+1])
                i++;
            dfs(i+1)
        }
        dfs(0)
        return res;
    }
}
