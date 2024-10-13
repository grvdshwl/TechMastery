// - Event Handling: Delegation and Propagation in JavaScript

/*
Event handling is crucial in JavaScript for handling user interactions. 
Two important concepts are delegation and propagation:

1. **Event Delegation**:
   Event delegation is a technique where you attach a single event listener to a parent element 
   to manage events from multiple child elements. This reduces the number of event listeners 
   and improves performance.

2. **Event Propagation**:
   Event propagation defines how events flow through the DOM. There are three phases:
   - Capturing Phase: The event starts from the root and propagates down to the target element.
   - Target Phase: The event reaches the target element.
   - Bubbling Phase: The event bubbles back up to the root.

Example (Event Delegation and Propagation):
*/

document.querySelector("#parent").addEventListener("click", function (event) {
  // Event delegation: Check if the target is a child button
  if (event.target && event.target.matches("button")) {
    console.log("Button clicked:", event.target.textContent);
  }
});

// HTML structure for delegation example:
// <div id="parent">
//     <button>Button 1</button>
//     <button>Button 2</button>
// </div>

// In the example above, the event listener is attached to the parent `div`.
// When any button inside is clicked, the event will bubble up to the parent,
// and the event handler can process the click.

// - Progressive Web Apps (PWA)

/*
Progressive Web Apps (PWAs) are web applications that provide a native app-like experience.
They use modern web capabilities to deliver fast, reliable, and engaging user experiences, 
even on unreliable networks. Key features of a PWA include:
1. Responsive: Fits any device screen.
2. Offline Support: Using service workers to cache assets and data.
3. Installable: Users can install PWAs to their home screen.

To create a PWA, you need:
1. A **Web App Manifest**: A JSON file with app metadata (name, icons, theme, etc.).
2. A **Service Worker**: A script that runs in the background, enabling offline functionality.

Example (PWA Manifest and Service Worker):
*/

// Manifest (manifest.json)
/*
{
    "name": "My PWA",
    "short_name": "PWA",
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#000000",
    "icons": [
        {
            "src": "/icon.png",
            "sizes": "192x192",
            "type": "image/png"
        }
    ]
}
*/

// Service Worker (sw.js)
self.addEventListener("install", function (event) {
  console.log("Service worker installing...");
  // Cache assets
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll(["/index.html", "/styles.css", "/icon.png"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

// In `index.html`, register the service worker:
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service Worker Registered"));
}

/*
The PWA will cache assets on first visit and serve them on subsequent visits, 
enabling offline functionality.
*/

// - Event Handling: Add, Remove, and Dispatch Event Listeners

/*
JavaScript allows you to add, remove, and dispatch custom events.

1. **Add Event Listener**:
   `addEventListener` allows you to attach a handler for a specific event.
   
2. **Remove Event Listener**:
   You can remove event listeners using `removeEventListener`.

3. **Dispatch Events**:
   Custom events can be triggered using `dispatchEvent`.

Example:
*/

function handleClick() {
  console.log("Button clicked!");
}

// Adding event listener
const button = document.querySelector("#myButton");
button.addEventListener("click", handleClick);

// Removing event listener
button.removeEventListener("click", handleClick);

// Dispatching custom event
const customEvent = new Event("customEvent");
document.dispatchEvent(customEvent);

// Listening for custom event
document.addEventListener("customEvent", () => {
  console.log("Custom event triggered!");
});

// - Intersection Observer API

/*
The Intersection Observer API allows you to monitor the visibility of an element 
within the viewport. This is useful for lazy loading images, infinite scroll, etc.

Example (Lazy Loading Images):
*/

const lazyImages = document.querySelectorAll("img.lazy");

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Replace placeholder src with the actual image src
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      observer.unobserve(img); // Stop observing the image after loading
    }
  });
});

// Observe each lazy image
lazyImages.forEach((img) => observer.observe(img));

// HTML structure for Intersection Observer example:
// <img class="lazy" data-src="actual-image.jpg" src="placeholder.jpg" alt="Lazy image">

/*
In this example, images are lazily loaded when they enter the viewport, 
saving bandwidth and improving page performance.
*/
