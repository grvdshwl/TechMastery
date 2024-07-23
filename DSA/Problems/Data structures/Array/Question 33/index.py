# Penality for a shop

# Input: customers = "YYNY"
# Output: 2
# Explanation: 
# - Closing the shop at the 0th hour incurs in 1+1+0+1 = 3 penalty.
# - Closing the shop at the 1st hour incurs in 0+1+0+1 = 2 penalty.
# - Closing the shop at the 2nd hour incurs in 0+0+0+1 = 1 penalty.
# - Closing the shop at the 3rd hour incurs in 0+0+1+1 = 2 penalty.
# - Closing the shop at the 4th hour incurs in 0+0+1+0 = 1 penalty.
# Closing the shop at 2nd or 4th hour gives a minimum penalty. Since 2 is earlier, the optimal closing time is 2.

class Solution:
    def bestClosingTime(self, customers: str) -> int:
        length = len(customers)
        total_y = customers.count("Y")
        total_n = 0
        min_value = float("inf")
        min_index = 0

        for i in range(0, length + 1):
            if (total_n + total_y) < min_value:
                min_value = total_n + total_y
                min_index = i

            if i >= length:
                break

            char = customers[i]

            if char == "N":
                total_n += 1

            if char == "Y":
                total_y -= 1

        return min_index

