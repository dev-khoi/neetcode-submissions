class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        row, col = len(grid), len(grid[0])
        res = 0

        def backtrack(r, c):
            # base case: out of grid, not 1
            if (r >= row or r < 0) or (c >= col or c < 0):
                return 0
            if grid[r][c] == 0:
                return 0

            # exploration
            # update validation first
            grid[r][c] = 0 

            area = 1

            area += backtrack(r+1, c)
            area += backtrack(r, c+1)
            area += backtrack(r-1, c)
            area += backtrack(r, c-1)

            return area


        # loop
        for i, rows in enumerate(grid):
            for j, cells in enumerate(rows):
                if grid[i][j] == 1:
                    res = max(res, backtrack(i, j))

        return res