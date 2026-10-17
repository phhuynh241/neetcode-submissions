class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // keys of this object are based on the frequency count of chars in each string
        const res = {};
        for (let string of strs) {
            const count = new Array(26).fill(0);

            for (let char of string) {
                // with char.charCodeAt(0) - 'a'.charCodeAt(0), this will give
                // 'a' is index 0
                // 'b' is index 1 etc...
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            // creates a unique key for each group of anagrams
            // key represents the frequency of chars in the string
            // like 'eat' = ["1,0,0,0,0,0,0,0,0,0,0...]
            const key = count.join(',');
            // if key does not already exist in res object, initialize an empty array at that key
            if (!res[key]) {
                res[key] = [];
            }
            // then push the current string into the corresponding for that key
            res[key].push(string);
            
        }
        return Object.values(res);

    }
}
