class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        
        const wordMap = new Map()
        for(const word of s){
            wordMap.set(word, (wordMap.get(word) || 0) + 1)
        }

        for(const word of t){
            if(!wordMap.get(word) || wordMap.get(word) === 0){
                return false;
            }
            wordMap.set(word,(wordMap.get(word) - 1))
        }
        return true;
    }
}
