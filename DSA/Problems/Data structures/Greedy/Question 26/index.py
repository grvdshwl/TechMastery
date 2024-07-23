# Wiggle Subsequence



def wiggleMaxLength(nums) :

        dp = [nums[i-1]-nums[i] for i in range(1,len(nums)) if nums[i-1] - nums[i] !=0]
        if len(dp) ==  0:
            return 1
        
        counter = 2

        for i in range (1,len(dp)):
            if (dp[i-1]>0 and dp[i]<0) or (dp[i-1] < 0 and dp[i]>0):
                counter += 1
        
        return counter

nums = [1,7,4,9,2,5]

print(wiggleMaxLength(nums))