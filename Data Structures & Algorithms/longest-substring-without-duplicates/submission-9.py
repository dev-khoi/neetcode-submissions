class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # without repeating chars
        i , j = 0, 0
        res = 0
        # create a set to keep track
        charSet = set()
        track = 0
        # looping through with j leading the index:
        while j < len(s):
            # if word[j] appears:
            while s[j] in charSet:
                # removing the word from index as it increases
                charSet.remove(s[i])
                # increase i until j
                i+= 1
                track -= 1

            # if there isn't:
            else:
                # keep track
                charSet.add(s[j])
                track += 1
                res = max(res, track)
            j+= 1

        return res