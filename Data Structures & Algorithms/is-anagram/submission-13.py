class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # s and t
        # [a, a, b, b]
        # a:
        # loop thru letter, make them key value, init 1
        # if you encounter another, just increment the value 
        s_dict = {}
        t_dict = {}

        for item in s:
            if item not in s_dict:
                s_dict[item] = 1
            else:
                s_dict[item] += 1

        for item in t:
            if item not in t_dict:
                t_dict[item] = 1
            else:
                t_dict[item] += 1
        
        if (s_dict == t_dict):
            return True

        return False