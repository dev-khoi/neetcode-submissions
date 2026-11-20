class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if(nums.length === 0){
            return [[]]
        }

        const perms = this.permute(nums.slice(1))
        const res = []
        for(let num of perms){
            for(let i = 0; i <= num.length; i++){
                const copy = num.slice()
                copy.splice(i,0,nums[0])
                res.push(copy)
            }
        }

        return res;
    }
}