class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        wordMap =  {}

        maxFreq = 0
        res = 1

        i, j =0, 0

        while j < len(s):
            wordMap[s[j]] = (wordMap.get(s[j], 0) + 1)
            maxFreq = max(maxFreq, wordMap.get(s[j]))

            while (j - i + 1 - maxFreq) > k:
                wordMap[s[i]] = wordMap.get(s[i]) - 1

                i+=1

            res = max(res, j-i + 1)
            j+=1
        return res