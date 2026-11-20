class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    // encoding / decoding design:
    // [lengthOfWord][special char][word]

    encode(strs) {
        // init res array 
        const res = []
        // for each str of strs
            for(const str of strs){
                // get word length
                const strLength = str.length
                // append to res (length#word)
                res.push(strLength,'#',str)
            }
        // return encode_string (from res array)
        return res.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // create res array
        const res =  []
        // create pointer i, j = 0
        let i = 0, j = 0

        // while i < the length of str
        while(i < str.length){
            // while j didn't find #
            while(str[j] !== '#'){
                // increase j
                j++
            }
                

            // state: j is at #, i is at the length of word

            // create length of word (Number(i))
            // TODO: validate i..
            const strLength= Number(str.slice(i, j));
            

            // append res array with the str [j+1: j+1+length]
            res.push(str.slice(j+1, j+1+strLength))
            
            // i = j+1+length
            i = j+1+strLength;
            // j= i +1
            j=i+1; 
        }

        return res;


    }
}
