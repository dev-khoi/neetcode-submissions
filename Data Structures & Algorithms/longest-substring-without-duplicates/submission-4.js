class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0, j = 0;
        let res = 0;

        const set = new Set();
        
        while( j < s.length ){
            
            // if it hits the word length limit
            while(set.has(s[j])){
                // increase i until the tracker is free again
                set.delete(s[i])
                i++;
            }
            // update the res and set 
            set.add(s[j]);
            res = Math.max(res, j - i + 1)

            j++;

        }

        return res;
    }
}
