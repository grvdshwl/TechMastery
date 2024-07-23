import { useState } from "react";

// Custom hook to handle input values
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
}

// Usage of the custom hook in a component
function InputExample() {
  // Use the custom hook to handle input value
  const input = useInput("");

  return (
    <div>
      <label>
        Type something:
        <input type="text" value={input.value} onChange={input.onChange} />
      </label>
      <p>You typed: {input.value}</p>
      <button onClick={input.reset}>Reset</button>
    </div>
  );
}

export default InputExample;
