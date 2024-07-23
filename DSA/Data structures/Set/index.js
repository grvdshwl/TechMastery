// ===============================
// * Set vs Array Comparison
// ===============================
// Arrays and Sets differ in several aspects:

// -------------------------------
// * Duplicates
// -------------------------------
// Arrays allow duplicate values, whereas Sets automatically remove duplicates.

// -------------------------------
// * Order
// -------------------------------
// Arrays maintain insertion order, whereas Sets do not guarantee any specific order.

// -------------------------------
// * Operations Efficiency
// -------------------------------
// Sets offer faster search and deletion operations compared to Arrays.

const set = new Set([1, 2, 3]);
set.add(4);
set.delete(2);

console.log(set.has(4));

console.log(set.size);

set.clear();

for (const item of set) {
  console.log(item);
}
