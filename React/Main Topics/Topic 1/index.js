// * What is React?
// React is an open-source UI library developed by Facebook.

// * Features:
//   - Component-driven architecture
//   - Virtual DOM
//   - One-way data flow
//   - Declarative approach
//   - Huge Ecosystem

// * Installation:
//   - To create a new project using Vite, run the following command:
//     ```
//     npm create vite@latest
//     ```

// * JSX:

//   - Without JSX, you need to use React.createElement to create elements
//   - Example without JSX:
//     ```jsx
//     const MyComponentWithoutJSX = () => {
//       return React.createElement(
//         "div",
//         null,
//         React.createElement("h1", {id:"1"}, "Hello, World!"),
//         React.createElement("p", null, "This is a simple React component.")
//       );
//     };
//     ```

//   - JSX allows you to write HTML-like code in JavaScript
//   - Example with JSX:
//     ```jsx
//     const MyComponentWithJSX = () => {
//       return (
//         <div>
//           <h1 id="1">Hello, World!</h1>
//           <p>This is a simple React component.</p>
//         </div>
//       );
//     };
//     ```
