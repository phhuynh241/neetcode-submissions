class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Put characters of string in hashmap
        # Iterate through t 
        # If any of t[i] isn't in s, return false
        flag = True;

        new_s = s;

        if len(s) != len(t):
            return False

        for char_s, char_t in zip(s,t):
            if (char_t not in s):
                return False
            else:
                new_s = new_s.replace(char_t, '', 1)
                print(new_s)
        
        if len(new_s) > 0:
            return False

        return True
