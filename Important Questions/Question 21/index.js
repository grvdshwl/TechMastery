// 1. Single Page Application (SPA)
// --------------------------------
// A Single Page Application is a web application that loads a single HTML page
// and dynamically updates the content as the user interacts with the app.
// SPAs avoid full page reloads and instead load only the necessary data/content
// in response to user actions, making the app feel faster and more responsive.
//
// - **How it works:**
//   * An SPA initially loads the entire app's structure (HTML, CSS, JS) on the first request.
//   * When a user navigates within the app, JavaScript handles routing (often via libraries like React Router).
//   * Only the needed content or components are loaded or replaced, instead of reloading the whole page.
//   * APIs (e.g., REST or GraphQL) are commonly used to fetch data dynamically without page reloads.
//
// - **Pros:**
//   * Smooth user experience without full page reloads.
//   * Reduced server load and faster interactions after the initial load.
//   * Better support for progressive web apps (PWAs) and offline functionality.
//
// - **Cons:**
//   * May have a larger initial load time, especially if JavaScript bundles are large.
//   * SEO challenges due to dynamic content loading (addressed with server-side rendering).
//   * Browser back/forward navigation requires additional routing handling to mimic page navigation.

// 2. Dynamic Page
// ---------------
// A dynamic page is a web page that can change its content or structure based on user interaction,
// data, or server-side responses. In contrast to static pages, dynamic pages update parts or the
// entire page without reloading, often based on user-specific data.
//
// - **How it works:**
//   * JavaScript, in conjunction with AJAX or Fetch API, is used to make asynchronous requests to a server.
//   * Based on the server response, the page updates its content (e.g., form submissions, data from APIs).
//   * Frontend frameworks like React, Vue, or Angular make it easier to build dynamic pages that respond to changes.
//
// - **Examples:**
//   * A news feed that loads more articles as the user scrolls down.
//   * E-commerce sites that update product details dynamically based on user selection (e.g., color, size).
//
// - **Pros:**
//   * Enhanced user experience due to real-time data loading.
//   * More interactive and engaging than static pages.
//   * Allows for personalization of content based on user data or preferences.
//
// - **Cons:**
//   * Increased reliance on JavaScript, which may lead to performance concerns.
//   * More complex to build and maintain compared to static pages.

// 3. Micro Frontend
// -----------------
// Micro frontends is an architectural style where a large web application is split into smaller,
// independent frontend components (micro-apps), each of which can be developed, deployed,
// and maintained separately.
//
// - **How it works:**
//   * Each micro-frontend is a self-contained unit, often with its own team and tech stack.
//   * These units are then integrated into a larger application, either via a central router
//     or using techniques like iframes or web components.
//   * Communication between micro-frontends can be handled through shared events, API calls,
//     or a central data store if needed.
//
// - **Pros:**
//   * Allows teams to work independently on different parts of the app.
//   * Enables the use of different technologies within the same application (e.g., React for one part, Angular for another).
//   * Easier maintenance and scalability by isolating codebases for specific functionalities.
//
// - **Cons:**
//   * Complexity in integrating multiple frameworks and managing inter-component communication.
//   * Potential for increased bundle size if each micro-frontend includes redundant libraries.
//   * May require more coordination to ensure a cohesive look and feel across the application.
