class Solution {
    /**
     * @param {number[]} piles: 
     * @param {number} h: <= length of the piles
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // create all the k hours eating range [1..max(piles)]
        // create result variable
        let res = Math.max(...piles)

        // perform binary search on the range
        // create start, end index
        let startRate = 1, endRate = res;
        // while start is smaller than the end index
        while(startRate <= endRate){ 
            // get the rate of eating banas from middle index
            const middleRate  = Math.floor((startRate + endRate) / 2)
            
            // find the hours of eating all bananas based on the rate
            let totalHour = 0;
            for(let p of piles){
                totalHour += Math.ceil(p / middleRate);
            }

     
            // if the found hour <= the maximum hour (h):
            if(totalHour <= h){ 
                // update the res var
                res = middleRate;
                // find a smaller rate: end = middle - 1
                endRate = middleRate - 1;
            }
            // if the found hour > the maxium hour (h):
            else{
                // find a larger rate: start = middle + 1
                startRate = middleRate + 1;
            }
        }
        // return result
        return res;

        // time comp: O(logm) + O(n) = O(logm + n) | m: largest pile, n = length of pile
        // space comp: O(1)
        
    }
}
