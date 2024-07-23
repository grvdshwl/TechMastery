// Why use className instead of class in React

// React compiles down to the code below

function Home() {
  return <h1 class="something">Hello World</h1>;
}

function Home() {
  return React.createElement(
    "h1",
    {
      class: "something",
    },
    "Hello World"
  );
}

// This is because you cannot specify class as an object property as it is a
// reserved keyword in older versions of JavaScript.

// Below is not allowed in older js

//   {
//       class: "something"
//   }

// className is being used to avoid conflicts.
