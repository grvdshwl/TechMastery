//*Factorial of large number using array -done

//* Time complexity ---> O(N)
function factorial(n) {
  let result = [1]; // Initialize result array with 1

  for (let i = 2; i <= n; i++) {
    result = multiply(result, i);
  }
  let finalResult = result.reverse().join("");

  return finalResult; // Convert array back to string for the factorial result
}

function multiply(arr, num) {
  let carry = 0;

  for (let i = 0; i < arr.length || carry > 0; i++) {
    if (i === arr.length) {
      arr.push(0);
    }

    let product = arr[i] * num + carry;
    arr[i] = product % 10; // Store the digit at position i
    carry = Math.floor(product / 10); // Calculate carry for the next iteration
  }

  return arr;
}

// Calculate factorial of a large number (e.g., 100)
const number = 100;
console.log(`Factorial of ${number} is:`, factorial(number));
