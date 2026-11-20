class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};

        // Step 1: Build frequency map
        for (const n of nums) {
            freqMap[n] = (freqMap[n] || 0) + 1;
        }

        // Step 2: Convert to array of [num, freq] pairs
        const entries = Object.entries(freqMap);

        // Step 3: Sort by frequency descending
        entries.sort((a, b) => b[1] - a[1]);

        // Step 4: Take top k keys
        const res = [];
        for (let i = 0; i < k; i++) {
            res.push(Number(entries[i][0]));
        }

        return res;
    }
}
