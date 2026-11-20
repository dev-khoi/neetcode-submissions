class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # finding the longest repeating char with allowed k amount of nonrepeat


        # the whole solution idea is placed around max frequency : the most word is appearing
        # maxfreq = length of the stirng right now + k
        #  k is compared to length -  maxFreq

        # so we can just keep tracking of what appears 
        wordMap = {}
        
        maxFreq = 0 

        res  = 1

        i,j = 0,0

        while j < len(s):
            # length = j - i + 1
            # LOGIC:
            # keep moving j foward:
            wordMap[s[j]] = (wordMap.get(s[j], 0) + 1)

            maxFreq = max(wordMap.get(s[j]), maxFreq)
            # if the length - maxfreq  > k:
            while j - i + 1 - maxFreq > k:
                # update i until satisfied the condition
                wordMap[s[i]] = (wordMap.get(s[i]) - 1)
                i+= 1

            res = max(res, j-i + 1)
            j+=1
        return res

