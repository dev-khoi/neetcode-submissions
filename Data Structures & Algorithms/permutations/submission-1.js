class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if(nums.length ===0){
            return [[]];
        }
        const res = []
        const per = this.permute(nums.slice(1))
        for(const num of per){
            for(let i = 0; i < nums.length; i++){
                const copy = num.slice()
                copy.splice(i,0,nums[0])
                res.push(copy)
            }
        }
        return res;
    }
}