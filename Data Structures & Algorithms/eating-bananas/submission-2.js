class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const eatingHours = (rate) => {
            let hours = 0;
            for (let p of piles) {
                hours += Math.ceil(p / rate);
            }
            return hours;
        };

        let left = 1;
        let right = Math.max(...piles);
        let res = right;  // start with max possible speed

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const hours = eatingHours(mid);
            console.log(`Speed: ${mid}, Hours: ${hours}`);

            if (hours <= h) {
                res = mid;         // try lower speed
                right = mid - 1;
            } else {
                left = mid + 1;    // need higher speed
            }
        }

        return res;
    }
}
