class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0, j =0

        let maxfreq = 0;
        let res = 0;
        const wordMap = new Map()

        // core logic:
        // the frequency, the length (j - i), and k (the replacement)
        for(j; j < s.length; j++){
            const wordj = s[j]
            const wordi = s[i]
            // setting the frequency
            wordMap.set(wordj, wordMap.get(wordj) + 1 || 1 )
            maxfreq = Math.max(maxfreq, wordMap.get(wordj))
            // a b a a
            // invalid condition
            while((j-i + 1) - maxfreq > k){
                wordMap.set(wordi, wordMap.get(wordi) - 1)
                i++;
            }
            
            res = Math.max(res, (j-i+1))
        }

        return res;

    }
}
