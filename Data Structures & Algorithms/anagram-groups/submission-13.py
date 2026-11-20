class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        '''
        Khoi's note:
        input, edge cases:
        cannot be empty


        ['cat', 'tac', 'vat']
        -> [['cat', 'tac'], ['vat]]

        # brute force:
        
        uniquely identified ?
        # dictionary (map)
        O(n) + O(klogk)

        # create wordDictionary

        # loop through for each str in strs:
            # sort the string -> id
            # if id in wordMap:
                # add into the value of that id 
            # if not -> create one mapping for that word 
        '''

        wordMap = {}

        for word in strs:
            wordId = "".join(sorted(word))
            if wordId in wordMap:
                wordMap[wordId].append(word)
            else:
                wordMap[wordId] = [word]

        return list(wordMap.values())
