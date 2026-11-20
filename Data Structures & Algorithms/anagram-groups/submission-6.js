class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // key: sorted str: [str]
        const map = new Map()

        // for each str of strs 
        for(const str of strs){
            // create key (sorted str)
            const key = str.split("").sort().join()
            // does map has the key?
            if(map.has(key)){
                // true: push into the value array
                map.get(key).push(str);    
            }else{
                // false: create
                map.set(key, [str])
            }
            
                
        }


        // turn map into array!
        const res  = map.values().toArray();
        return res;
    }
}
