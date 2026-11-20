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
        const charMap = new Map()
        for(const char of s){
            !charMap.has(char) ? charMap.set(char, 0) : charMap.set(char, charMap.get(char) + 1)
        }

        for(const char of t){
        if(!charMap.has(char) || charMap.get(char) < 0){
            return false;
        }else{
            charMap.set(char, charMap.get(char) -1)
        }

        }

        return true;
    }
}
