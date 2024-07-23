//* custom trim

function customTrim(str) {
  let start = 0;
  let end = str.length - 1;

  // Find the index of the first non-whitespace character from the start
  while (start < str.length && str[start] === " ") {
    start++;
  }

  // Find the index of the first non-whitespace character from the end
  while (end >= 0 && str[end] === " ") {
    end--;
  }

  // Return the trimmed substring
  return str.substring(start, end + 1);
}

// Example usage:
const exampleString = "   Hello, world!   ";
console.log(customTrim(exampleString)); // Output: "Hello, world!"
