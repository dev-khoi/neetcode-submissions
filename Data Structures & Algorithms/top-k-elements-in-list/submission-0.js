class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = {}
        const freq = new Array(nums.length)
        for(let n of nums) {
            numsMap[n] = (numsMap[n] || 0) + 1;
        }
        for (const n in numsMap){
            if(freq[numsMap[n]]){
                freq[numsMap[n]].push(n);
            } else{
                freq[numsMap[n]] = [n];
            }
        }

        const res = [];
        for(let i = freq.length; i > 0; i--){
            if(freq[i]){
 for (let n of freq[i] ) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
            }
          
        }
        
    }
}
