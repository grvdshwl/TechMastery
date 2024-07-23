import React, { useRef, useEffect } from "react";

function FocusInput() {
  // Create a ref object
  const inputRef = useRef(null);

  // Effect to focus on the input element when the component mounts
  useEffect(() => {
    // Access the current property of the ref to get the DOM element
    inputRef.current.focus();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <label>
        Type something:
        {/* Attach the ref to the input element */}
        <input ref={inputRef} type="text" />
      </label>
    </div>
  );
}

export default FocusInput;
