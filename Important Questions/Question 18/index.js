//* Explain in details the differences b/w useCalback and useMemo hook with example ?

// Explanation:
// - `useMemo`:
//   - `useMemo(() => { /* computation */ }, [dependencies]);`
//   - Memoizes the result of a computation (the return value).
//   - Only recalculates if one of its dependencies changes.
//   - Used for expensive calculations that do not need to run on every render.
//   - Example: The `computedValue` will only be recalculated if `num` changes.
//   - Console output: "Expensive calculation happening..." will only log if `num` changes.

// - `useCallback`:
//   - `useCallback(() => { /* function body */ }, [dependencies]);`
//   - Memoizes the function itself.
//   - Only recreates the function if one of its dependencies changes.
//   - Used for memoizing callback functions to avoid unnecessary re-renders of child components.
//   - Example: The `memoizedCallback` function will only be recreated if `onClick` changes.
//   - Console output: "Callback invoked" will log whenever the button is clicked.

import React, { useMemo, useCallback } from "react";

function ExampleComponent({ num, onClick }) {
  // useMemo memoizes the result of a computation.
  // The computation will only re-run if `num` changes.
  const computedValue = useMemo(() => {
    console.log("Expensive calculation happening...");
    return num * 2;
  }, [num]);

  // useCallback memoizes the function itself.
  // The function will only be recreated if `onClick` changes.
  const memoizedCallback = useCallback(() => {
    console.log("Callback invoked");
    onClick();
  }, [onClick]);

  return (
    <div>
      <div>Computed Value: {computedValue}</div>
      <button onClick={memoizedCallback}>Click me</button>
    </div>
  );
}
