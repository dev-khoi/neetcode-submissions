class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # dfs if keep epxanding until hitting the 0 , if 
        rows, cols = len(grid), len(grid[0])
        visited_islands =  0

        def dfs(r, c):
            # base case
            # guard around the traversal, visited conditions
            if (r >= rows or r < 0) or (c >= cols or c < 0) or grid[r][c] == '0':
                return
            # marking
            grid[r][c] = '0'

            # exploration
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)


        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1':
                    visited_islands+=1
                    dfs(r,c)

        return visited_islands
        