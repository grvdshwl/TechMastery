import { useState } from "react";

// Custom hook to handle data in local storage
function useLocalStorage(key, initialValue) {
  // Retrieve data from local storage or use the initial value
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to manage the current value
  const [value, setValue] = useState(initial);

  // Update local storage when the value changes
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

// Usage of the custom hook in a component
function LocalStorageExample() {
  // Use the custom hook to manage a value in local storage
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
}

export default LocalStorageExample;
