    #  Maximum ballons
    # Example 1:
    # Input: text = "nlaebolko"
    # Output: 1

    # Example 2:
    # Input: text = "loonbalxballpoon"
    # Output: 2
    
def max_number_of_balloons(text: str) -> int:

    balloon = {
        "b": 0,
        "a": 0,
        "l": 0,
        "o": 0,
        "n": 0
    }

    for char in text:
        if char in balloon:
            balloon[char] += 1

    return min(balloon['b'], balloon["a"], balloon['l']//2, balloon["o"]//2, balloon["n"])

# Test cases
text1 = "nlaebolko"
print("Test Case 1:", max_number_of_balloons(text1))  # Output: 1

text2 = "loonbalxballpoon"
print("Test Case 2:", max_number_of_balloons(text2))  # Output: 2
