class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closeToOpen = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }
        for char in s:
            if char in closeToOpen.values():
                stack.append(char)
            else:
                if len(stack) > 0 and stack[-1] == closeToOpen[char]:
                    stack.pop()
                else:
                    return False
        return not stack
