class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): 
            return False
        

        # create a map 
        wordMap = {}
        for w in s:
            wordMap[w] = wordMap.get(w,0) + 1
        
        for w in t:
            if w not in wordMap or (wordMap[w] == 0):
                return False
            else:
                wordMap[w] = wordMap.get(w) - 1

        return True
