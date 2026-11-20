class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const paranthesisesMap = {
            ')': '(',
            '}' : '{',
            ']' : '['
        }
        const neededToPopStack = [];

        const sArr = s.split('')

        for(const word of sArr){
            // opening tags
            if(!paranthesisesMap[word]){
                neededToPopStack.push(word)
            }
            // closing tags
                 else {
                if (neededToPopStack.pop() !== paranthesisesMap[word]) {
                    return false;
                }
            }
        }

        return neededToPopStack.length === 0;
    }
}
