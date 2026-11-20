class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # create res object
        # loop through and append into the list
        # if match -> group
        # if not -> create new one
        # use map with word sorted as the key
        # {sortedWord : [word]}

        # fix the respond object
        wordMap = {}

        for word in strs:
            sortedWord = "".join(sorted(word))
            
            wordMap.setdefault(sortedWord, []).append(word)

        return list(wordMap.values())
