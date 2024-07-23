//* https://medium.com/hackernoon/web-performance-understanding-the-critical-render-path-part-1-54eec8d7667c
//* Critical Rendering Path: Understand the five crucial steps involved in the Critical Rendering
//* Path, which plays a vital role in how web pages are loaded and displayed in browsers().

// Critical Rendering Path: Understand the five crucial steps involved in the Critical Rendering
// Path, which plays a vital role in how web pages are loaded and displayed in browsers.

// 1. HTML Parsing: The browser starts by parsing the HTML document it receives from the server.
// During this process, it identifies the structure of the document, including elements, attributes, and their relationships.
// The parser builds the Document Object Model (DOM), which represents the hierarchical structure of the webpage.

// 2. CSS Parsing and Construction of the Render Tree: Once the browser has parsed the HTML, it parses any associated CSS files.
// CSS Parsing involves understanding the style rules defined in the CSS files.
// The browser then constructs the Render Tree, which combines the DOM structure with CSS styles.
// Only elements that are visible in the viewport are included in the Render Tree.

// 3. Layout (Reflow): With the Render Tree constructed, the browser calculates the layout or geometry of each visible element.
// This process is often referred to as Reflow or Layout.
// The browser determines the size and position of elements based on their CSS styles and the structure of the document.

// 4. Painting: After the layout is calculated, the browser paints the pixels to the screen.
// It creates layers and fills them with pixels according to the styles and layout calculated earlier.
// Painting involves drawing text, images, backgrounds, borders, and other visual elements onto the screen.

// 5. Rasterization and Compositing: In this final step, the browser rasterizes the layers created during the painting phase into individual pixels.
// It then combines these pixels into the final image that is displayed on the screen.
// Rasterization involves converting vector-based graphics into a raster image format suitable for display.
// Compositing involves blending the various layers together to create the complete webpage.

// Optimizing each of these steps is crucial for improving the performance of web pages.
// Techniques such as minimizing the number of critical resources, reducing render-blocking CSS and JavaScript,
// and optimizing image sizes can all help streamline the Critical Rendering Path and reduce page load times.
