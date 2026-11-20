class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        i, j = 0, 0

        wordSet = set()
        res = 0
        
        while j < len(s):
            while s[j] in wordSet:
                wordSet.remove(s[i])

                i+=1

            wordSet.add(s[j])
            res = max(res, j - i +1)
            j+=1

        return res