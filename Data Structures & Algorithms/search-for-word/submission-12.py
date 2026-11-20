class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        row, col = len(board), len(board[0])
        path = set()
        # backtrack function
        def backtrack(r, c, i):
            if i > len(word) - 1:
                return True
            # base case
            # in the tracking set, went overboard, not the right word
            # this is seperated because we can't access outside 
            if r < 0 or c < 0 or r >= row or c >= col:
                return False

            if (r, c) in path or board[r][c] != word[i]:
                return False

            path.add((r,c))
                
            # exploration of 4 different ways
            if backtrack(r+1, c, i+1) or backtrack(r, c+1, i+1) or backtrack(r-1, c, i+1) or backtrack(r, c-1, i+1):
                return True
    
            path.remove((r, c))


        # initial loop to find the first word
        for i, r in enumerate(board):
            for j in range(len(r)):
                if board[i][j] == word[0]:
                    if backtrack(i,j,0):
                        return True
        return False