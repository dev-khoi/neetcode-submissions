class Solution:
    def isValid(self, s: str) -> bool:
        paraMap = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }

        stack = []

        for char in s:

            if stack and char in paraMap and paraMap[char] == stack[-1]:
                stack.pop()
            elif stack and char in paraMap and paraMap[char] != stack[-1]:
                return False
            else:
                stack.append(char)

        return len(stack) == 0