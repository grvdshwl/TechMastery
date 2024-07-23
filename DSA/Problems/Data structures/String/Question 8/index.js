//* //* 	Maximum Number of Balloons

/**
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 */
function maxNumberOfBalloons(text) {
  const balloon = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };

  for (let char of text) {
    if (balloon.hasOwnProperty(char)) {
      balloon[char]++;
    }
  }

  return Math.min(
    balloon["b"],
    balloon["a"],
    Math.floor(balloon["l"] / 2),
    Math.floor(balloon["o"] / 2),
    balloon["n"],
  );
}

// Test cases
const text1 = "nlaebolko";
console.log("Test Case 1:", maxNumberOfBalloons(text1)); // Output: 1

const text2 = "loonbalxballpoon";
console.log("Test Case 2:", maxNumberOfBalloons(text2)); // Output: 2
