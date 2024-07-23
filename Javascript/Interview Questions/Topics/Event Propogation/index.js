// Capturing Phase:
// - During the capturing phase, the event is captured by the outermost element and propagates inward towards the target element.
// - Event capturing allows you to intercept events before they reach their target.
// - Capturing phase starts from the topmost ancestor of the target element and goes down to the target element.
// - You can specify capturing by setting the third parameter of addEventListener to true.

// Bubbling Phase:
// - After the capturing phase completes, the event enters the bubbling phase.
// - During the bubbling phase, the event bubbles up from the target element to the topmost ancestor.
// - Bubbling allows you to handle events at a higher level of the DOM hierarchy.
// - By default, event listeners attached with addEventListener use bubbling.

// Event Target:
// - The target element is the element on which the event was originally triggered.
// - During both capturing and bubbling phases, the event moves towards or away from the target element.

// Event Propagation Control:
// - You can stop event propagation using event.stopPropagation(). This prevents the event from propagating further in either the capturing or bubbling phase.
// - If you want to prevent the default action associated with the event, you can use event.preventDefault().

// Event Delegation:
// - Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners on individual child elements.
// - Events that occur on the child elements bubble up to the parent element, where you can handle them.
// - This technique is useful when you have a large number of dynamically created elements or elements that are added or removed from the DOM.

// Example:
// HTML:
// <div id="parent">
//     <button id="child">Click Me</button>
// </div>

// JavaScript:
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// parent.addEventListener('click', function(event) {
//     console.log('Parent Clicked');
// });

// child.addEventListener('click', function(event) {
//     console.log('Child Clicked');
//     event.stopPropagation(); // Stop propagation to prevent parent click event from firing
// },{capture :true});
