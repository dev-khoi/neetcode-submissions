class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map()
        for(const str of strs){
            const sortedStr = str.split("").sort().join("")
        if (!strMap.has(sortedStr)) {
            strMap.set(sortedStr, []);
        }
        strMap.get(sortedStr).push(str);
        }

        const result = Array.from(strMap.values())
        return result;
    }

}
