class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        '''
        Khoi notes:
        s, t -> anagram ?

        they wouldn't be all characters -> clean it up
        string can be empty?
        anagram strings: can be any order 
        are they the same length? 
        are they different case (capital cases?)

        # test cases:

        race vs cear -> True
        a vs alskdj -> False
        ' ' vs ' asdflkj ' ->False

        BRUTE FORCE:
        sort 2 stirngs out

        # compare char by char
        # O(nlogn) + O(n)

        MORE OPTIMIZE:
        create a map var
        loop through first and add to dictionary

        loop through the second string, we can start removing count from map
            # invalidate anagram?: 
            # trying to remove sth doesn't exist
            # remove something that is already 0
        '''

        cleanS = "".join(c for c in s if c.isalpha())
        cleanT = "".join(c for c in t if c.isalpha())

        # compare length
        if len(cleanS) != len(cleanT):
            return False
        # compare each word
        wordMap = {}
        for char in cleanS:
            wordMap[char] = wordMap.get(char, 0) + 1

        for char in cleanT:
            if char not in wordMap:
                return False
            if wordMap[char] <= 0:
                return False
            else:
                wordMap[char] -= 1
            
        return True
        