// Pros of Styled Components over Vanilla CSS:

// 1. Scoped Styles
// Styled Components encapsulate styles within a component, avoiding style conflicts.
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
`;
// The Button component’s styles are isolated from other buttons on the page.
// No need to worry about CSS specificity issues or class name collisions.

// 2. Dynamic Styling with JavaScript
// Styles can adapt based on props or state.
const DynamicButton = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
`;

// Usage
<DynamicButton primary>Primary Button</DynamicButton>;
<DynamicButton>Secondary Button</DynamicButton>;
// This allows for flexible styling within a single component,
// avoiding conditional class names in vanilla CSS.

// 3. CSS-in-JS Ecosystem
// Styled Components let you use JavaScript within CSS for features like loops and functions.
const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 576,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => `@media (max-width: ${sizes[label]}px) { ${args} }`;
  return acc;
}, {});

const ResponsiveBox = styled.div`
  width: 100%;
  ${media.desktop`width: 50%;`}
  ${media.tablet`width: 75%;`}
  ${media.phone`width: 100%;`}
`;

// 4. Cleaner Component Code
// Styles are colocated with components, so it’s easy to see a component’s structure and styles together.
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

// 5. Automatic Vendor Prefixing
// Styled Components handle browser compatibility by adding vendor prefixes automatically.
const StyledInput = styled.input`
  display: flex;
  align-items: center;
  appearance: none;
`;
// No need for manually adding `-webkit-appearance`, `-moz-appearance`, etc.

// 6. Theme Support
// Themes make it easy to apply consistent styles throughout the app.
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "blue",
  secondaryColor: "gray",
};

const ThemedButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
`;

// Usage with ThemeProvider
<ThemeProvider theme={theme}>
  <ThemedButton>Button with Theme</ThemedButton>
</ThemeProvider>;
// The theme can be switched out to create different styles (e.g., dark mode).

// Cons of Styled Components over Vanilla CSS:

// 1. Increased Bundle Size
// Adding the styled-components library increases the overall bundle size.
import styled from "styled-components";

// 2. Learning Curve
// Developers new to CSS-in-JS may find it challenging compared to standard CSS or preprocessors.

// 3. Performance Overhead
// Styled Components generate CSS at runtime, which can affect performance slightly in large apps.
// This example creates styles dynamically rather than using precompiled CSS.

// 4. CSS Reusability
// Reusing styles across multiple components might require extra effort.
const buttonStyles = `
  background-color: blue;
  color: white;
`;

const PrimaryButton = styled.button`
  ${buttonStyles}
`;

const SecondaryButton = styled.button`
  ${buttonStyles}
`;
// In vanilla CSS, you could achieve this by simply applying the same class name.

// 5. Separation of Concerns Debate
// Styles are embedded within JavaScript, contrasting with the traditional separation of CSS and JS.
const MixedComponent = styled.div`
  display: flex;
  background-color: ${(props) => (props.dark ? "black" : "white")};
`;

// 6. Debugging Complexity
// Styled Components create unique class names at runtime, which can complicate debugging in the browser’s dev tools.
// The generated class name might look like `.sc-d1ce4e2-0` instead of a meaningful class name from vanilla CSS.

// 7. Dependence on JavaScript
// Since Styled Components require JavaScript, any issues with JS could disrupt styles.
