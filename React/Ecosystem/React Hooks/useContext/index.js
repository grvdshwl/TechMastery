import React, { createContext, useContext } from "react";

// Step 1: Create a context
const MyContext = createContext();

// Step 2: Create a provider component
function MyProvider({ children }) {
  const sharedValue = "Hello from Context!";

  return (
    <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>
  );
}

// Step 3: Use the context in a child component
function ChildComponent() {
  // Use the useContext hook to access the context value
  const contextValue = useContext(MyContext);

  return <p>{contextValue}</p>;
}

// Step 4: Use the provider in your app
function App() {
  return (
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  );
}

export default App;
