function isLeapYear(year) {
  // A leap year is divisible by 4 but not 100, unless also divisible by 400.
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function getWeekDay(date) {
  const [day, month, year] = date.split("-").map(Number);

  // Reference date: 01/01/2000 (Saturday = index 5)
  const referenceDayIndex = 5;
  let totalDays = 0;

  // Add days from full years between 2000 and the given year.
  for (let i = 2000; i < year; i++) {
    totalDays += isLeapYear(i) ? 366 : 365;
  }

  // Add days from the months of the current year up to the given month.
  for (let i = 0; i < month - 1; i++) {
    totalDays += monthDays[i];
    if (i === 1 && isLeapYear(year)) {
      totalDays += 1; // Add one extra day for February in a leap year.
    }
  }

  // Add days of the current month.
  totalDays += day - 1;

  // Adjust to the reference day.
  totalDays += referenceDayIndex;

  // Determine the day of the week.
  const weekDayIndex = totalDays % 7;
  return weekDays[weekDayIndex];
}

const result = getWeekDay("22-11-2024");
console.log(result);
