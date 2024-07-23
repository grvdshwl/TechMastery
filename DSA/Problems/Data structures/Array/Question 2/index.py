# Can Place Flowers

# Example 1:

# Input: flowerbed = [1,0,0,0,1], n = 1
# Output: true

# Example 2:

# Input: flowerbed = [1,0,0,0,1], n = 2
# Output: false


class Solution:
    def canPlaceFlowers(self, flowerbed, n):
        length = len(flowerbed)
        for i in range(length):
            if flowerbed[i] == 0 and (i == 0 or flowerbed[i-1] != 1) and (i == length - 1 or flowerbed[i+1] != 1):
                n = n-1
                flowerbed[i] = 1

        return n<=0 