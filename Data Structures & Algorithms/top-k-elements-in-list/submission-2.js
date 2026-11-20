class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // most k frequent nubmers in nums
        // map {1: 3} -> return the biggest values

        // create a map {key: value}
        // key: the number
        // value: the frequency
        const map = new Map()


        // for each num in nums:
        for(const num of nums){
            // does the map has the num?
                // true: increase the value
                // false: create starting with 0
            map.set(num, (map.get(num) || 0) + 1)
        }
            

        // create numArr = map (in array form)
        // map (in array form) = [[freq, number]]
        const numArr = map.entries().toArray();
        // .map(([number,freq]) => [freq,number])

        // sort the numArr (descending)
        numArr.sort((a,b) => {return b[1] - a[1]})
        // return [0:k] value of numArr
        return numArr.slice(0, k).map((x) => x[0]); 
    }
}
