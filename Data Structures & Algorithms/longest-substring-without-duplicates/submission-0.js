class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const sArr = s.split("");

        let l = 0, r = 0;
        let wMap = new Set();
        let length = 0;

        while (r < sArr.length) {
            if (!wMap.has(sArr[r])) {
                wMap.add(sArr[r]);
                length = Math.max(length, r - l + 1);
                r++;
            } else {
                wMap.delete(sArr[l]);
                l++;
            }
        }

        return length;
    }
}
