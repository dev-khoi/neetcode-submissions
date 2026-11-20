class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // anagram 

        // length check
        if(s.length !== t.length) return false
        
        // 1st word iteration to get the map
        const wordMap = new Map()
        for(const c of s){
            wordMap.set(c, (wordMap.get(c) ||  0) + 1)
        }


        // 2nd word iteration to compare
        for(const c of t){
            const wordMapValOfC = wordMap.get(c)

            if(!wordMap.has(c)|| wordMapValOfC <= 0){
                return false;
            }
            wordMap.set(c, wordMap.get(c) - 1);
        }
            // if the value of that index < 0: false
            // if not value: false

            // else get that value from that index -1

        return true;
    }
}
