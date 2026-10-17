class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        // create a hash table
        const countS = {};
        const countT = {};

        for (let i = 0; i < s.length; i++) {
            const charS = s[i];
            const charT = t[i];
            countS[charS] = (countS[charS] || 0) + 1;
            countT[charT] = (countT[charT] || 0) + 1;
        }

        // iterate through hash table
        for (const key in countS) {
            if (countS[key] !== countT[key]) {
                return false
            }
        }

        return true
    }
}
