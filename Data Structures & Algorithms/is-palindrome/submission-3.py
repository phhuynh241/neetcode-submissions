import string

class Solution:
    def isPalindrome(self, s: str) -> bool:
        removePunctuation = s.maketrans('', '', string.punctuation)
        finalString = s.translate(removePunctuation).replace(' ', '').lower()
        # removeSpacing = s.replace(" ", "");
        # finalText = removeSpacing.translate(s.maketrans('', '', string.punctuation)).lower();

        i = 0
        j = len(finalString) - 1

        while i <= j: 
            if (finalString[i] != finalString[j]):
                return False
            i = i + 1
            j = j - 1

        return True



#remove spacing
#remove symbol/punctuation and make it all lowercase
#pointer