class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        cleanS = "".join(c for c in s if c.isalnum())
        cleanT = "".join(c for c in t if c.isalnum())
        if len(cleanS) != len(cleanT):
            return False

        wordMap = {}
        for c in cleanS:
            wordMap[c] = wordMap.get(c, 0) + 1
        
        for c in cleanT:
            if c not in wordMap or  wordMap[c] == 0 :
                return False
            wordMap[c] = wordMap[c] - 1

        return True