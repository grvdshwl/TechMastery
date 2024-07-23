//* React Render

//* React Memo To Use
// When the child element is expensive and props rarely changes

//* React Not To Use

// 1. There is no need to wrap child component with react Memo if
// child component itself has children Element(i.e child component is a Element
// like dispatchEvent,or p or any other react component.) as child
// component will still rerender as child element is always a new Reference

// 2. Not to use in impure components i.e. JSX changes irrespective
// of props and state (i.e. Time or Date or React.Random() updates in UI)
//
//

//3. If you pass object or function as a prop or children to child component
// Child component will rerender irrespective of the memo as
// every time parent re-renders the object or function is created with new refrence

//Note --> To Over come point 3 you can use useMemo hook for object or arrays and
// useCallback for functions.
