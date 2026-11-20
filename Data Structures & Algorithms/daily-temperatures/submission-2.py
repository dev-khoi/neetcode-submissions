class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # 
        res = [0] * len(temperatures)
        stack = [] # hold the [value, index]
        for i, a in enumerate(temperatures):
            while stack and stack[-1][0] < a:
                value,index = stack.pop()
                res[index] = i - index
                
            stack.append([a, i])
        return res
