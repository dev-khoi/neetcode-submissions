class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        '''
        given a grid

        return min of minute until zero fresh fruits left or  -1 if still fresh fruit


        locate all the rotten fruits

        perform bfs to turn all into rotten

        afterward, track the number of fresh fruit and time 
        '''
        time, fresh = 0, 0

        # establishing the queue
        queue = []
        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == 2:
                    queue.append((row, col))
                elif grid[row][col] == 1:
                    fresh+=1

        # use the queue to perform rotten process
        directions = ((0,1), (1,0), (-1,0), (0,-1))
        while queue and fresh > 0:
            lenQueue = len(queue)
            for _ in range(lenQueue):
                row, col = queue.pop(0)

                # we can explore all the direction surrounding it
                # if normal food -> turn rotten -> add to queue
                for dr, dc in directions:
                    # unexplore coordinate
                    r, c = row + dr, dc + col

                    # valid and fresh
                    if r in range(len(grid)) and c in range(len(grid[0])) and grid[r][c] == 1:
                        grid[r][c] = 2
                        fresh -= 1
                        queue.append((r,c))

            time += 1

        return time if fresh == 0 else - 1