class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // strs is an array
    // {[sorteStr]}
        // [ [], [], []]
        const anagram = new Map();
        for(let str of strs){
            const sortedStr = str.split("").sort().join("");
            if(anagram.get(sortedStr)){
                anagram.get(sortedStr).push(str);
            }else{
                anagram.set(sortedStr, [str]);
            }
        }
        return Array.from(anagram.values());
    }
}
