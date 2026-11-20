class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // loop thru s and store in map
    // loop though the t to check if its in the set or not
    // if not -> false
    isAnagram(s, t) {
        const sMap = new Map();
        if(s.length !== t.length){
            return false;
        }
        for(const letter of s){
            if(sMap.has(letter)){
                sMap.set(letter, sMap.get(letter) + 1);
            }else{
                sMap.set(letter, 1);
            }
        }

        for(const letter of t){
            if(!sMap.has(letter) || sMap.get(letter) === 0){
                return false;
            }else{
                sMap.set(letter, sMap.get(letter) - 1)
            }
        }
        return true;

    }
}
