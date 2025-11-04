# Frequency of The Most Frequent Element



from typing import List

def maxFrequency(nums: List[int], k: int) -> int:
    nums.sort()
    n = len(nums)
    left = 0
    right = 0
    res = 0
    total_sum = 0

    while right < n:
        total_sum += nums[right]

        while nums[right] * (right - left + 1) > total_sum + k:
            total_sum -= nums[left]
            left += 1

        res = max(res, right - left + 1)
        right += 1

    return res

result = maxFrequency([1, 2, 4], 2)
print(result)
