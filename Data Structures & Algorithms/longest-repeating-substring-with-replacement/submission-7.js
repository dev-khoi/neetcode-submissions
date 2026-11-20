class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let res = 0;
        let i  =0, j = 0, maxf = 0;

        while(j < s.length){
            count.set(s[j], (count.get(s[j]) || 0) + 1)
            maxf = Math.max(maxf,count.get(s[j]))

            if((j - i + 1- maxf)>k){
                count.set(s[i], count.get(s[i])- 1)
                                i++;

            }
                        res = Math.max(res, j-  i + 1)

            j++;
        }
        return res;
    }
}
