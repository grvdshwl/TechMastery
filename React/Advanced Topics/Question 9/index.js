//* Lazy Loading and Suspense in React

//* What is react suspense ?

// Lazy Loading:

// 1. Definition:
//    - Lazy loading is a technique to defer the loading of certain parts of a web application until they are needed.

// 2. In React:
//    - React provides `React.lazy()` to load components lazily.
//    - The function passed to `React.lazy()` should return a dynamic `import()` statement for the component.

// 3. Example:
const MyLazyComponent = React.lazy(() => import("./MyComponent"));

// 4. Usage:
//    - Components loaded lazily are only fetched and rendered when they are actually needed.
//    - Helps improve initial loading times by loading only essential components.

// React Suspense:

// 1. Definition:
//    - React Suspense is a feature that allows components to "suspend" rendering while waiting for asynchronous operations to complete.

// 2. In React:
//    - `React.Suspense` is a component used to wrap a part of the React tree where asynchronous work is expected.

// 3. Example:
<React.Suspense fallback={<div>Loading...</div>}>
  <MyLazyComponent />
</React.Suspense>;

// 4. Usage:
//    - When a component wrapped in `React.Suspense` triggers a promise (e.g., during lazy loading), rendering is suspended until the promise is resolved.
//    - The `fallback` prop defines what to render while waiting for the asynchronous operation to complete.

// 5. Benefits:
//    - Improves the user experience by preventing UI flickering during asynchronous operations.
//    - Coordinates loading states and provides a fallback UI, enhancing the perceived performance of the application.

// Combining Lazy Loading and React Suspense:

// 1. Integration:
//    - Lazy loading and React Suspense are often used together to optimize the loading of components and manage asynchronous operations.

// 2. Example:
//    <React.Suspense fallback={<div>Loading...</div>}>
//      <MyLazyComponent />
//    </React.Suspense>

// 3. Perceived Performance:
//    - Components are loaded lazily, reducing the initial payload and improving the perceived performance.
//    - React Suspense handles the loading state, providing a seamless user experience during asynchronous operations.
