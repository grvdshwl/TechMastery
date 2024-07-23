//* What is memory leak in react and how it is identified ?

//* https://medium.com/@abubakarmemon/memory-leaks-in-react-js-b611745c5f08
//* https://www.dhiwise.com/post/the-complete-guide-to-detect-and-prevent-memory-leaks-in-react-js
//* https://javascript.plainenglish.io/fixing-memory-leaks-in-react-e76e5d21632e

// A memory leak in React.js can occur when you have objects
// or resources that are no longer needed but are still being
// referenced by the application, preventing them from being garbage collected.
//  Over time, this can lead to increased memory usage and degraded performance.

//* Reasons

// 1. Event listeners

// 2. Subscription-based APIs

// 3. Improper closure usage

// 4.Large data sets or state.

//* Identifying Memory Leaks in Your React Application

// Increasing Memory Consumption: Monitor your application's memory usage over time,
// and if you notice a continuous increase in memory consumption without any
//  significant decrease, it may indicate a memory leak.

//  Performance Degradation: Memory leaks can impact the overall
//  performance of your application. If you observe a gradual slowdown
//  in rendering or increased loading times, it could be a symptom of memory leaks.

//  Crashes or Freezes: In severe cases, memory leaks can cause your
//  application to crash or freeze due to excessive memory usage.
//   If your application becomes unresponsive or crashes unexpectedly,
//    it's crucial to investigate possible memory leak issues.

//* Strategies to Fix Memory Leaks in React

//* Properly Manage Event Listeners

//When adding an event listener to DOM elements within your components,
// it's crucial to remove those listeners when the component unmounts.

//* Dispose of External Resources

// Components often rely on external resources such as timers,
// subscriptions, or network requests. It's essential to dispose of these resources when the component unmounts to prevent memory leaks

//* Optimize State Management

// Avoid storing excessive data in component state,
// especially when it's not required. If a component
//  accumulates unnecessary data over time, it can result in memory leaks.

// Ensure that you reset or clean up the state when the component is unmounted.
// Additionally, consider using React's useEffect hook with a dependency
//  array to mimic the behavior of componentWillUnmount and perform cleanup actions.

//* Use Memoization and Callback Refs

//In some cases, unnecessary re-rendering of components can contribute to
//  memory leaks. By using memoization techniques and callback refs,
//  you can optimize component rendering and prevent memory leaks. React's
// React.memo and useCallback hooks can be useful in this context.
