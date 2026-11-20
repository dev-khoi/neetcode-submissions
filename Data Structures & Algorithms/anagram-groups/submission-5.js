class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    //    strs: anagrams[]
    // tasks: anagrams array -> array of grouped anagram strs
    // key condition to check anagrams: contain the exact same word
    // -> sort str , check if its in the map
    
        const strMap = new Map();
        for(const word of strs){
            const sortedWord = word.split("").sort().join();

            if(strMap.has(sortedWord)){
                strMap.set(sortedWord, [...strMap.get(sortedWord), word])
            }else{
                strMap.set(sortedWord, [word])
            }
        }
        console.log(strMap.values())
        return Array.from(strMap.values());
    }

}
