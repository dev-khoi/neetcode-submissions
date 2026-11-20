class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleanS  = "".join(c for c  in s.lower() if c.isalnum())

        i, j = 0, len(cleanS) - 1

        while i <= j:
            if cleanS[i] == cleanS[j]:
                i += 1
                j-=1
            else:
                return False

        return True