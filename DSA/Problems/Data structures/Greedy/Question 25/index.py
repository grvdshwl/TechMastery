# Advantage Shuffle

class Solution:
    def advantageCount(self,nums1, nums2):
        n = len(nums2)
        nums1.sort()
        
        sorted2 = sorted(enumerate(nums2), key=lambda x: x[1])
        
        result = [None] * n
        
        left = 0
        right = n - 1
        
        for item in nums1:
            if sorted2[left][1] < item:
                result[sorted2[left][0]] = item
                left += 1
            else:
                result[sorted2[right][0]] = item
                right -= 1

        return result
        