class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l,r = 0, len(nums) - 1
        
        # 1,2
        # [1,2,3,4,5,6]
        # [3,4,5,6,1,2]

        # find pivot
        # finding the side to perform regular binary search
        # pivot compare to target
            # target >= pivot num < right number:
                # left = pivot
            # else: (on the left side)
                # right = pivot - 1

        # finding the pivot
        # left, right 
        while l < r:
            m = (l+r) // 2
            # decide to search left or right
            
            if nums[m] >= nums[r]:
                l = m + 1
            else: # nums[m] < nums[r]
                r = m
            # m
        
        
        # find the index | -1
        pivot = l
        l,r = 0, len(nums) - 1 
        if nums[pivot] == target:
            return pivot
        # on the smaller left 
        if nums[pivot] < target  <= nums[r]:
            l = pivot
        else:
            r = pivot
            
        while l <= r:
            m = (l+ r)//2
            if target == nums[m]:
                return m
            if target > nums[m]:
                l = m + 1
            else:
                r = m - 1

        return -1