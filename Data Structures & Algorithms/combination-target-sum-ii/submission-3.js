class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = []
        candidates.sort((a,b)=> {return a -b})

        const dfs = (i, subset, total) => {
            // base case
            if(total === target){
                res.push([...subset])
                return
            }
            if(total > target || i === candidates.length){
                return;
            }

            // 2 decisions
            subset.push(candidates[i])
            dfs(i+1, subset, total + candidates[i])

            subset.pop()
            while(i < candidates.length && candidates[i]===candidates[i+1]){
                i++;
            }
            dfs(i+1, subset, total)

        }
        dfs(0, [], 0)
        return res;
    }
}
