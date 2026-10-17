class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        new_s = s;

        if len(s) != len(t):
            return False

        
        for char_t in t:
            if (char_t not in s):
                return False
            else:
                new_s = new_s.replace(char_t, '', 1)
        
        if len(new_s) > 0:
            return False

        return True
