/*
 * React Fiber Architecture:
 *
 * In React, a reconciler algorithm compares two DOM trees to determine necessary screen changes.
 * React Fiber, introduced in React 16, is a new reconciler algorithm developed over two years to address
 * issues with the original algorithm, effectively re-implementing React's core algorithms.
 *
 * The term "fiber" in React relates to its tree data structure, representing a node of the DOM tree.
 *
 * Before Fiber, React synchronously reconciled and rendered elements in a single process, potentially
 * causing delays in user interface responsiveness, especially with complex DOM tree changes.
 */

/*
 * Traditional Reconciliation:
 *
 * In the traditional (pre-Fiber) React rendering process, when you update the state or props of a component,
 * React follows these steps:
 *
 *    Reconciliation: React constructs a virtual representation of the updated component tree.
 *    Diffing: It compares the new virtual tree with the previous one to determine what changed.
 *    Update: React applies the changes to the actual DOM.
 *
 * This process happens in a single batch, which can be problematic for performance because it might cause delays
 * in rendering and make animations less smooth.
 */

/*
 * React Fiber:
 *
 * React Fiber breaks down the rendering process into smaller, more manageable units, which can be paused,
 * resumed, and prioritized. It allows React to be more flexible and efficient in its rendering.
 *
 * Here’s a simplified example to illustrate how React Fiber works:
 *
 * Suppose you have a React component that renders a list of items, and you want to update one of the items.
 * In the traditional approach, React might need to re-render the entire list. However, with React Fiber, it can be more granular.
 *
 *    Reconciliation: When an update occurs, React starts the reconciliation process but doesn’t necessarily complete it in one go.
 *    Priority Reconciliation: React assigns different priorities to different parts of the component tree. For example, updating a visible part of the screen (e.g., an item near the top) is given a higher priority than updating items off-screen.
 *    Yielding: React can pause and yield control back to the browser to ensure that high-priority user interactions remain responsive.
 *    Partial Update: React can then apply the changes in a more granular way. It may update just the item that changed without re-rendering the entire list.
 */

/*
 * React Fiber brings several benefits:
 *
 * - Improved performance by breaking the call stack limits, allowing React to pause or resume rendering as needed.
 * - Cleaner error handling through error boundaries, preventing the "white screen of death" for JavaScript runtime errors.
 * - Support for new render types like fragments and strings, as well as returning multiple elements from a render function.
 * - Enhanced user interface performance, enabling advanced elements with animations, layouts, and gestures.
 */
