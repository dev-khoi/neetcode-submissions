class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = ""
        for(let str of strs){
            encodedStr += str.length + "#" + str; 
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== "#"){
                j++;
            }
            const length = Number(str.slice(i, j));

            res.push(str.slice(j+1, length + j + 1))
            i =length + j + 1;
        }
        return res;
    }
}
