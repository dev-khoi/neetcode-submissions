class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0 ){
            return 0;
        }
        let i = 0, j = 0
        let res = 0;
        const wordSet = new Set()
        while(j !== s.length){
            const jWord = s[j]
            if(wordSet.has(jWord)){
                while(wordSet.has(jWord)){
                    wordSet.delete(s[i])
                    i++;
                }
            }else{
                res = Math.max(res, (j-i)+1)
            }
                            wordSet.add(jWord)

            j++;
        }

        return res;
    }
}
