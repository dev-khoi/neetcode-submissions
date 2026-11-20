class Solution:

    def encode(self, strs: List[str]) -> str:
        # return string
        # encoding byt having #number 
        res = deque()
        for s in strs:
            res.append(str(len(s))+ '#')
            res.append(s)


        return "".join(res)

    def decode(self, s: str) -> List[str]:
        i,j = 0,0
        res = []
        while i < len(s):
            while(s[j] != '#'):
                j+=1
            
            length = int(s[i:j])

            res.append(s[j+1: j+1+length])

            i = j+1+length
            j = i + 1

        return res
