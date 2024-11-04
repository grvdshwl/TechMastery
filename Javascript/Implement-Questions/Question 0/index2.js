function clockAngle(hour, minutes) {
  // Normalize the hour if it is greater than 12
  hour = hour % 12;

  // Calculate the angle of the hour hand
  const hourAngle = hour * 30 + minutes * 0.5;

  // Calculate the angle of the minute hand
  const minuteAngle = minutes * 6;

  // Calculate the difference between the two angles
  let angle = Math.abs(hourAngle - minuteAngle);

  // Return the smallest angle between the two hands
  return Math.min(angle, 360 - angle);
}

// Example usage
console.log(clockAngle(5, 30)); // Output should be 7.5
