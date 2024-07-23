//* Implement a function to merge rows of data from the same user.

function mergeUserData(rows) {
  const mergedData = {};

  // Iterate through each row
  rows.forEach((row) => {
    const userId = row.userId;

    // If userId already exists, merge data
    if (mergedData.hasOwnProperty(userId)) {
      mergedData[userId] = { ...mergedData[userId], ...row };
    } else {
      // If userId does not exist, add new entry
      mergedData[userId] = { ...row };
    }
  });

  // Convert mergedData object back to array of objects
  return Object.values(mergedData);
}

// Example usage:
const rows = [
  { userId: 1, name: "Alice", age: 30 },
  { userId: 2, name: "Bob", gender: "Male" },
  { userId: 1, email: "alice@example.com" },
  { userId: 2, city: "New York" },
];

const mergedRows = mergeUserData(rows);
console.log(mergedRows);
