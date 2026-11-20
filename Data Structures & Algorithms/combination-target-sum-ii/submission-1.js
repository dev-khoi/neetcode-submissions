class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = []
        candidates.sort((a,b)=> {return a -b})
        const dfs = (i, subset, total)=> {
            if(total === target){
                res.push([...subset])
                return
            }
            
            if(i === candidates.length || total > target){
                return
            }

            // decisions
            subset.push(candidates[i])
            dfs(i+1, subset, total + candidates[i])

            // not including
            subset.pop()
            // 
            while(i+1 < candidates.length && candidates[i] === candidates[i+1]){i++;}
            dfs(i+1, subset, total)
        }
        dfs(0,[],0)
        return res;
    }
}
