import string

class Solution:
    def isPalindrome(self, s: str) -> bool:
        removePunctuation = s.maketrans('', '', string.punctuation)
        finalString = s.translate(removePunctuation).replace(' ', '').lower()

        i = 0
        j = len(finalString) - 1

        while i <= j: 
            if (finalString[i] != finalString[j]):
                return False
            i = i + 1
            j = j - 1

        return True



## Problem
#Given a string s, return true if it is a palindrome, otherwise return false.
#A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

## Pattern
# Two pointer

## Approach
# Sanitize string first for spaces and special characters
# Pointers at start and end of sanitized string
# Increment first pointer, decrement second pointer

## Complexity
# Time: O(n)
# Space: O(n)

## Insight
# Instead of string building with maketrans/translate, use custom alphaNum filtering method, and then in while loop, traverse the ORIGINAL string in place