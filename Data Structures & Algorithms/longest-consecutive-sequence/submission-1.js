class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // brute force : O(n^2) O(n)
        // sorted: O(nlogn) O(1)
        // hash set

        // create a set = nums
        const set = new Set(nums)
        // create result value = 0
        let res = 0;

        // for each num in nums
        for(const num of nums){
            // does the set has num - 1?
            if(!set.has(num-1)){
                // create length of the sequence = 1
                let lengthOfSeq = 1;
                // while set still have the next number:
                while(set.has(num+lengthOfSeq)){
                    // length + 1
                    lengthOfSeq++;
                }

                // compare between length with the already existed res
                // assign res to the bigger one
                res = Math.max(res, lengthOfSeq)
            }
            
        }
        
        // return the longest
        return res;

        // time complexity: O(n)
        // space: O(n)
    }
}
