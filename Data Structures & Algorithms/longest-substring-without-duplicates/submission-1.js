class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let r =  0;
        let i = 0;
        let longest = 0;
        let wordMap = new Set();
        while(r < s.length){
            if(wordMap.has(s[r]) && i < r){
                wordMap.delete(s[i])
                i++;
            }else{
  wordMap.add(s[r]);
            longest  = Math.max(longest, r- i + 1)
            r++;
            }
          
        }
        return longest
    }
}
