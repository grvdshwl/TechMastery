//* Higher Order components

//* A Higher Order Component (HOC) is a function that takes a component and returns a new component with additional
//* functionality. Essentially, it's a way to reuse component logic and share it between
//* different parts of your application.

const withToggle = (WrappedComponent) => {
  return class WithToggle extends React.Component {
    state = {
      isOpen: false,
    };

    toggle = () => {
      this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    };

    render() {
      return (
        <WrappedComponent
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          {...this.props}
        />
      );
    }
  };
};

// Component
const MyToggleComponent = ({ isOpen, toggle }) => (
  <div>
    <button onClick={toggle}>Toggle</button>
    {isOpen && <p>Content to toggle</p>}
  </div>
);

// Using the HOC
const EnhancedToggleComponent = withToggle(MyToggleComponent);
