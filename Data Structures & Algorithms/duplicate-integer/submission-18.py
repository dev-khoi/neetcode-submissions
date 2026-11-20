class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        '''
        input,edge cases 
        test
        optimizaiton for what 

        approaches ?
        
        Khoi notes: 
        input, edge cases: 

        arrays length >= 0
        array only contain number
        can there be multiple duplicated content

        test case:
        [] -> false
        [1,1] -> true
        [1,1, 2, 2] -> true
        [3,4 ] -> false 


        Optimization for what ?


        brute force:
        loop through each num:
            loop through from that num to the end:
                perform logic to find the duplciate (2nd loop var == 1st loop var or not ?)

        O(n^2) -> O(n) using a set looping through once
        '''
        # set 
        numSet = set()

        # loop to find duplicate
        for num in nums:
            # if the finding value is in the set:
            if num in numSet:
                return True
                # return True
            else:
                # add it into the set
                numSet.add(num)
        # can't findand return
        return False 