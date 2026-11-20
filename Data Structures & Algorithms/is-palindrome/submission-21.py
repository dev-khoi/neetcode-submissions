class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleanS = "".join(char for char in s.lower() if char.isalnum())

        i, j = 0, len(cleanS) - 1

        while i < j:
            if cleanS[i] != cleanS[j]:
                return False
                
            else:
                i+=1
                j-=1

        return True