import React, { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array: specify dependencies that affect the callback

  return (
    <div>
      <p>Count: {count}</p>
      {/* Pass the callback function to a child component */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Increment Count</button>;
}

export default ParentComponent;
