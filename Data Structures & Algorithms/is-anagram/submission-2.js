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
        if(s.length !== t.length){
            return false;
        }
        const sArr = s.split("").sort();
        const tArr = t.split("").sort();

        for(let i = 0; i < s.length; i++){
            if(sArr[i] !== tArr[i]){
                return false;
            }
        }
        return true


       
    //    const sMap = new Map();

    //    for(const char of s){
    //     if(sMap[char] === undefined){
    //         sMap[char] = 1;
    //     }else{
    //         sMap++;
    //     }
    //    }
    //     // 'x': 1,
    //     // 'b': 2
    //    for (const char of t){

    //    }


    }
}
