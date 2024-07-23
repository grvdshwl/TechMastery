//* Differene bw render props and HOC

/*
Both the render props pattern and Higher Order Components (HOCs) serve similar purposes
in terms of code reuse and logic sharing in React. However, there are some differences
in their implementation and use cases. Here are some considerations to help you decide
where to use render props versus HOCs:
*/

// Use Render Props When:
/*
    Fine-grained Control: Render props provide more fine-grained control to the consuming
    components. The render prop function is called explicitly, allowing the consumer to
    decide what to render and how to render it. This makes render props a good choice
    when you need maximum flexibility and customization.
*/
/*
    Prop Drilling: If you need to pass multiple props or callbacks from a component to its
    descendants without prop drilling (passing props through intermediary components),
    render props can be a cleaner solution. The consumer has direct access to the data
    or functions provided by the render prop.
*/
/*
    Component Composition: Render props are particularly useful for creating components
    that are designed to be composed with other components. They allow for a more dynamic
    and flexible component composition model.
*/

// Use HOCs When:
/*
    Encapsulation of Logic: HOCs encapsulate and abstract away logic from the components
    they enhance. If you want to reuse a specific set of functionalities across multiple
    components without exposing the internal implementation details, HOCs are a good choice.
*/
/*
    Declarative Approach: HOCs often provide a more declarative way to enhance components.
    By wrapping a component with an HOC, you can express the intent to enhance the component
    without explicitly calling a function, as is the case with render props.
*/
/*
    Middleware Pattern: HOCs can be thought of as middleware for components, intercepting
    and modifying their behavior. This can be useful for tasks like handling authentication,
    logging, or other cross-cutting concerns.
*/
