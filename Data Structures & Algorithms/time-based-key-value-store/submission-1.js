class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    // BRUTE FORCE
    // keyStore map stores timestamp map

    // -> storing would be O(1)
    // O (n) loop through each key, and update to the closes
    set(key, value, timestamp) {
        // key : {value, timestamp}
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({timestamp: timestamp, value:value});

    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    // log(n)
    get(key, timestamp) {
        const keyVal = this.keyStore.get(key) || [];

        let l = 0;
        let r = keyVal.length - 1;
        let res = ''
        while(l <= r){
            const m = Math.floor((l+r)/2);

            if (keyVal[m].timestamp <= timestamp) {
                res =  keyVal[m].value;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return res;

    }
}
