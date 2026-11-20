class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
            // nums
        // input: arrays 
        //  can be empty: true
        // can there negative values: false
        // is the array sorted: false
        // given arrays: true


        // ANY duplicate -> return true;
        // no duplicate -> return false;


        // brute force
        // O(n^2)
        //  o(1)

        // faster lookup : hash map/ set
        // set ? 

        // time complexity: O(n)
        // space complexity: O(n)
        // PSEUDOCODE ????
    hasDuplicate(nums) {

        const set = new Set()
        // CREATE A LOOP through every elements: i in length
            for(let i = 0; i  < nums.length; i++){
                // set has nums[i]?
                if(set.has(nums[i])){
                    // true: return true
                    return true;
                }else{
                    set.add(nums[i]);
                }
                
                // false:
                    // append it into the set 
                    // keep going (continue)
            
            }
        return false;
            
    }
}
