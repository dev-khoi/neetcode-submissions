class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // init res array = nums 
        const res = new Array(nums.length).fill(1)
        
        // 2 ITERATIONS:
        // 1st: building pre
        // init preProduct = 1
        let preProduct = 1;
        // for each num in nums (i to keep track of the index):
        for(let i = 1; i < nums.length; i++){
            // res array = nums[i-1] * preProduct
            preProduct *= nums[i-1];
            res[i] *= preProduct
        }
            

        // 2nd: building post
        // init postProduct = 1
        let postProduct = 1;
        // for each num in nums (i to keep track of the index):
        for(let i = nums.length-2; i >= 0; i--){
            // res array = nums[i+1] * postProduct
            postProduct *= nums[i+1];
            res[i] *= postProduct
        }


        // time complexity: O(n)
        // space complexity: O(n)

        // return the res array
        return res;
    }
}
