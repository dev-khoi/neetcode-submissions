class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // without duplbicate 
        // sliding window method
        // creating a map
        // 2 pointers
        // check the Set if the same -> remove, UPDATE THE LOWER POINTER
        // check the Set if not the same -> update the longest (Math.max()), adding number into the map
         
        let i =  0, j = 0;
        let res = 0;
        const wordSet = new Set();
        for(j; j< s.length; j++){
            const jWord = s[j];
            while(wordSet.has(jWord)){
                wordSet.delete(s[i]);
                                i++;

            }
            if(!wordSet.has(jWord)){
                wordSet.add(jWord);
                res = Math.max(res, (j - i)+ 1)
            }
        }
        return res;
    }
}
