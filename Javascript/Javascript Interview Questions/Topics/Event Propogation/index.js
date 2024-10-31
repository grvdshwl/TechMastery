//* What is Event Propagation
// Event propagation is the process where events triggered on an element propagate or travel through the DOM in a specific order.
// It occurs in three phases: capturing, target, and bubbling.

//* What is Event Bubbling
// Event bubbling is when an event starts from the target element and propagates upward to its ancestors.
// By default, JavaScript events are handled in the bubbling phase.

//* What is Event Capturing (Trickling)
// Event capturing, also called trickling, is when an event starts from the root element and propagates down to the target element.
// To capture events, set the third parameter of addEventListener to `true`.

//* How to Stop Bubbling or Capturing
// Use `event.stopPropagation()` to stop the event from further propagation in either the capturing or bubbling phase.
// Use `event.stopImmediatePropagation()` to stop all listeners from firing on the current target.

//* What is Event Delegation
// Event delegation is a technique of attaching a single event listener to a parent element to manage events on child elements.
// This is efficient for managing multiple elements dynamically added or removed from the DOM.

//* event.target vs event.currentTarget
// - `event.target`: The element that triggered the event.
// - `event.currentTarget`: The element to which the event listener is attached.
// - `this` in an event handler: Refers to `event.currentTarget` by default in regular functions, or the element itself when using arrow functions.

// Example: Event Propagation and Delegation
// HTML Structure:
// <div id="parent">
//   <button id="child">Click Me</button>
// </div>

// JavaScript Example:
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Attaching event listeners
parent.addEventListener("click", function (event) {
  console.log("Parent Clicked");
  console.log("event.target:", event.target); // Element that triggered the event, could be child or parent
  console.log("event.currentTarget:", event.currentTarget); // Always the parent element in this listener
});

child.addEventListener(
  "click",
  function (event) {
    console.log("Child Clicked");
    event.stopPropagation(); // Stops bubbling to parent
  },
  { capture: true } // Enables capturing for the child
);

// Expected Output on Click:
// - Clicking on `#child`:
//   - Logs "Child Clicked" from child’s listener.
//   - No "Parent Clicked" due to `stopPropagation()`.
// - Clicking on `#parent`:
//   - Logs "Parent Clicked" if directly on the parent, without going through the child.
