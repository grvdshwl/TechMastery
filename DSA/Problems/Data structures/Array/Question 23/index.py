#Find All Numbers Disappeared in an Array

# Example 1:

# Input: nums = [4,3,2,7,8,2,3,1]
# Output: [5,6]

# Example 2:

# Input: nums = [1,1]
# Output: [2]


class Solution:
    def findDisappearedNumbers(self, nums) :
        length = len(nums)

        for num in nums:
            index = abs(num) - 1
            
            
            nums[index] = - 1 * abs(nums[index])

        ans = []

        for i in range(0,length):
            if(nums[i]>0):
                ans.append(i+1)
        
        return ans
            
        
