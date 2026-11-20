class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        # recursion
        # idea: to get all the subset of the nums
        # and in each subset, we can go back to add the num[0] to each position 
        # to create more subset
        # reaching back to the top would create all the ppossible permutations


        # considering case : [1,2,3]
        # base case
        if len(nums)==0:
            return [[]]

        # in final recursion: perms: [[], [3], [2,3]]
        # but not including 1 in it 
        # arrays of all the subset,
        perms = self.permute(nums[1:])

        res = []

        # iterate through the perms, add 1 into each spot for each element
        for p in perms:
            # adding nums[0] to each spot to create new permutations
            for i in range(len(p) + 1):
                p_copy = p[:]
                p_copy.insert(i, nums[0])
                res.append(p_copy)

        return res