class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // monotonic decreasing stack

        // create res array
        const res = Array(temperatures.length).fill(0);

        // create a stack array
        const stack = [];

        // store {index: , temp: }

        // for each day temp (of temperatures array)
        for (let i = 0; i < temperatures.length; i++) {
                const ithTemp = temperatures[i];

                // while the day temp is larger than the top of the stack
                // AND there is a value on top of the stack
                while (
                        stack.length &&
                        ithTemp > stack[stack.length - 1].temp
                ) {

                        // pop the smaller temp day value out of the stack
                        const stackTemp = stack.pop();

                        // update the smaller temp day value in res array
                        res[stackTemp.index] =
                        i - stackTemp.index;
                }


            // append to the stack
            stack.push({
                index: i,
                temp: ithTemp
            });
        }

        // return the res array
        return res;
    }
}