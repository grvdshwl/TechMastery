//  Asteroid Collision
function asteroidCollision(asteroids) {
  const stack = [];

  for (let currentAsteroid of asteroids) {
    while (stack.length && currentAsteroid < 0 && stack[stack.length - 1] > 0) {
      const diff = currentAsteroid + stack[stack.length - 1];
      if (diff < 0) {
        stack.pop();
      } else if (diff > 0) {
        currentAsteroid = 0;
      } else {
        currentAsteroid = 0;
        stack.pop();
      }
    }

    if (currentAsteroid) {
      stack.push(currentAsteroid);
    }
  }

  return stack;
}
