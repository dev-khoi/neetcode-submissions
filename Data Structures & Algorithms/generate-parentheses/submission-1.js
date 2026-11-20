class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const openPar = '(', closePar = ')'
        const res =[]
        let subset  = []
        const dfs = (openi, closei) => {
            if(openi === n && closei === n){
                return res.push(subset.join(''))
            }
            if(openi < n){
                subset.push(openPar)
                dfs(openi +1, closei)
                subset.pop()

            }
            if(closei < openi){
                subset.push(closePar)
                dfs(openi, closei+1)
                subset.pop()
            }

        }
        dfs(0,0)
        return res
    }

}
