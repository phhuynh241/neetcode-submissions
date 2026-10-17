class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        output = [];
        for i in range(len(nums)):
            temp = 1;
            print(output)
            for j in range(len(nums)):
                if (i != j):
                    temp *= nums[j];

            output.append(temp);    
        
        return output
