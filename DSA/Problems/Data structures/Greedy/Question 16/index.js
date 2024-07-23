//* Lemonade Change

// Input: bills = [5,5,5,10,20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

var lemonadeChange = function (bills) {
  let map = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (let bill of bills) {
    if (bill === 5) {
      map[5] += 1;
    } else if (bill === 10) {
      if (map[5] > 0) {
        map[5] -= 1;
        map[10] += 1;
      } else {
        return false;
      }
    } else {
      if (map[5] > 0 && map[10] > 0) {
        map[5] -= 1;
        map[10] -= 1;
        map[20] += 1;
      } else if (map[5] > 2) {
        map[5] -= 3;
        map[20] += 1;
      } else {
        return false;
      }
    }
  }

  return true;
};
