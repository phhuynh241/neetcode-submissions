class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let left = 1;
        let right = Math.max(...piles);
        let maxRate = right;

        while (left <= right) {
            const average = Math.floor((left+right) / 2); // get the middle
            console.log(average);

            let totalTime = 0;
            for (const pile of piles) {
                totalTime += Math.ceil(pile/average); // get total time based off of the current pile over the rate
            }

            if (totalTime <= h) {
                maxRate = average;
                right = average - 1;
            } else {
                left = average + 1;
            }
        }
        return maxRate;
    }
}
