class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        # if element doesn't exist in our data structure (dictionary)
        # record it with an initial value of 1

        # if element does exist in our data structure (dictionary)
        # increment the value by 1 with its existing value

        # now that we have the number of occurences that occur between the values
        # sort it by greatest to least (somehow?)
        # from there, take the first 2 elements in the sorted array? dictionary? and print it

        numOfOccurences = defaultdict(int)
        for num in nums:
            numOfOccurences[num] += 1
        
        sortedKeys = sorted(numOfOccurences, key=numOfOccurences.get, reverse=True)
        print(sortedKeys)

        myList = [];
        i = 0;
        while i < k:
            myList.append(sortedKeys[i]);
            i += 1

        print(myList)
        return myList

            