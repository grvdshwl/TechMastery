import React, { useState } from "react";

function Counter() {
  // Declare a state variable named 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Button to increment the count when clicked */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
