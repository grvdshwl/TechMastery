//* Render Props

// The term "render prop" refers to a technique for sharing code between React components
//  using a prop whose value is a function.

// Render Props Component
class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return this.props.render(this.state.count, this.increment);
  }
}

// Usage of Render Props Component
const App = () => (
  <Counter
    // Render prop function providing UI and behavior
    render={(count, increment) => (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    )}
  />
);
