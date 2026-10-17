class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let rate = 1;
        while (true) {
            let totalTime = 0;

            for (let pile of piles) {
                totalTime += Math.ceil((pile/rate))
            }

            if (totalTime <= h) {
                return rate
            }

            rate++;
        }
    }
}
