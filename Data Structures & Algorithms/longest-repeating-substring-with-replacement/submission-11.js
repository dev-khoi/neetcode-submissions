class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0, j = 0;
        let res = 0;
        let maxf = 0;
        const count = new Map();

        while(j< s.length){
            // total word repeating word length 
            // = char repeating the most + k replacments
            count.set(s[j], (count.get(s[j]) || 0) + 1)
            maxf = Math.max(maxf, count.get(s[j]))


            while(j-i+1 - maxf >k){
                count.set(s[i], (count.get(s[i])) - 1)
                i++;
            };


            res = Math.max(res, j - i +1)
            j++;
        }

        return res;
    }
}
