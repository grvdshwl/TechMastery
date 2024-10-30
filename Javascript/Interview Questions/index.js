// 1. What is the DOM, and how does it relate to HTML?
// The DOM (Document Object Model) represents an HTML document as a tree structure with elements, attributes, and text.
// JavaScript interacts with this structure to dynamically manipulate the HTML content, styles, and behavior.

// 2. How can you access elements in the DOM using JavaScript?
// Use methods like `document.getElementById`, `document.getElementsByClassName`, `document.querySelector`, etc.

const element = document.getElementById("myElement");

// 3. Explain the differences between getElementById, getElementsByClassName, and getElementsByTagName.
// `getElementById` returns a single element by its ID.
// `getElementsByClassName` returns a live HTMLCollection of elements with a specified class.
// `getElementsByTagName` returns a live HTMLCollection of elements by tag name.

// 4. What is the purpose of the querySelector method, and how does it differ from querySelectorAll?
// `querySelector` selects the first element that matches a CSS selector.
// `querySelectorAll` returns a static NodeList of all elements matching the selector.

const singleItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");

// 5. Explain the concept of event bubbling and how it impacts event handling in the DOM.
// Event bubbling is the process where events propagate up from a child element to its parent elements.

document.getElementById("child").addEventListener("click", function () {
  console.log("Child element clicked");
});
document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent element clicked"); // Will be triggered if "child" is clicked.
});

// 6. How do you stop event propagation in the DOM?
// Use `event.stopPropagation()` to prevent the event from bubbling up to parent elements.

element.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Event propagation stopped");
});

// 7. What is event delegation, and why is it useful in DOM manipulation?
// Event delegation is attaching a single event listener to a parent element to handle events for multiple child elements.
// Useful for managing dynamically created elements.

document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target && event.target.matches("button.item")) {
    console.log("Button in parent clicked");
  }
});

// 8. How can you dynamically create HTML elements using JavaScript?
// Use `document.createElement` to create new elements and `appendChild` or `insertBefore` to add them.

const newElement = document.createElement("div");
newElement.textContent = "Hello";
document.body.appendChild(newElement);

// 9. Explain the differences between the textContent and innerHTML properties.
// `textContent` sets/gets plain text.
// `innerHTML` sets/gets HTML content.

element.textContent = "<strong>Hello</strong>"; // Displays "<strong>Hello</strong>"
element.innerHTML = "<strong>Hello</strong>"; // Displays "Hello" in bold

// 10. How can you modify CSS properties of an element in the DOM using JavaScript?
// Access the `style` property of the element and set CSS properties.

element.style.color = "red";

// 11. Explain the purpose of the setAttribute and getAttribute methods in DOM manipulation.
// `setAttribute` sets an attribute's value, while `getAttribute` retrieves it.

element.setAttribute("data-role", "admin");
console.log(element.getAttribute("data-role")); // Output: "admin"

// 12. What is the difference between appendChild and insertBefore methods for adding elements to the DOM?
// `appendChild` adds an element as the last child.
// `insertBefore` inserts an element before a specific child.

const childElement = document.createElement("div");
document.body.appendChild(childElement);
document.body.insertBefore(childElement, document.body.firstChild);

// 13. How do you remove elements from the DOM using JavaScript?
// Use `removeChild` on the parent element or call `element.remove()`.

document.body.removeChild(childElement);

// 14. What is the purpose of the parentNode property in DOM manipulation?
// `parentNode` retrieves the parent node of an element, allowing traversal to its parent.

console.log(childElement.parentNode);

// 15. Explain how to clone an element in the DOM using JavaScript.
// Use `element.cloneNode()`; pass `true` to also clone child nodes.

const clonedElement = element.cloneNode(true);

// 16. How do you check if an element exists in the DOM using JavaScript?
// Use `document.contains` or check if `element` is not `null`.

if (document.body.contains(element)) {
  console.log("Element exists");
}

// 17. What is the purpose of the classList property, and how can you use it to manipulate classes?
// `classList` allows easy access to add, remove, and toggle CSS classes on an element.

element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("active");

// 18. How do you add and remove classes from an element in the DOM?
// Use `classList.add` and `classList.remove`.

element.classList.add("highlight");
element.classList.remove("highlight");

// 19. Explain the differences between classList.add, classList.remove, and classList.toggle.
// `classList.add` adds a class; `classList.remove` removes it; `classList.toggle` adds/removes it based on presence.

// 20. How can you traverse the DOM tree using JavaScript?
// Use properties like `parentNode`, `firstChild`, `lastChild`, `nextSibling`, and `previousSibling`.

console.log(element.parentNode);
console.log(element.firstChild);

// 21. What are data attributes (data-*), and how can you use them in DOM manipulation?
// `data-*` attributes store custom data in HTML and can be accessed via `dataset`.

element.dataset.role = "admin";
console.log(element.dataset.role);

// 22. Explain the purpose of the style property in DOM manipulation.
// The `style` property allows for inline CSS modification of an element.

element.style.backgroundColor = "blue";

// 23. How can you retrieve the dimensions (width and height) of an element in the DOM?
// Use `offsetWidth` and `offsetHeight` properties.

console.log(element.offsetWidth, element.offsetHeight);

// 24. What is the purpose of the offset properties (offsetWidth, offsetHeight, offsetLeft, offsetTop) in DOM manipulation?
// These properties give the dimensions and position of an element relative to its offset parent.

console.log(element.offsetLeft, element.offsetTop);

// 25. How do you handle form manipulation in the DOM using JavaScript?
// Use properties like `form.elements`, `value`, and add event listeners for interaction.

const form = document.querySelector("form");
form.elements["username"].value = "John";

// 26. Explain the differences between innerText, textContent, and innerHTML.
// `innerText` shows visible text; `textContent` shows all text content; `innerHTML` shows HTML with tags.

// 27. How do you detect if an element is hidden or visible in the DOM?
// Check the `display` property or `getBoundingClientRect()` for visibility.

const isVisible =
  element.style.display !== "none" &&
  element.getBoundingClientRect().height > 0;

// 28. What are the differences between the client and offset properties in DOM manipulation?
// `client*` properties exclude scrollbars, while `offset*` include them.

console.log(element.clientWidth, element.offsetWidth);

// 29. How can you handle scroll events in the DOM using JavaScript?
// Add an event listener on `scroll` and use properties like `scrollTop`.

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

// 30. Explain the differences between createDocumentFragment and createElement in DOM manipulation.
// `createDocumentFragment` creates a lightweight container to hold nodes before adding to the DOM for better performance.
// `createElement` creates an actual DOM element.

const fragment = document.createDocumentFragment();
const newDiv = document.createElement("div");
fragment.appendChild(newDiv);
document.body.appendChild(fragment);
