/*
Why can't we call React hooks inside loops or conditions?

In React, hooks like useState, useEffect, and others are meant to be called
at the top level of functional components. This restriction is in place
because React relies on the order in which hooks are called to maintain
state between re-renders of the component.

When you call a hook, React internally keeps track of the state associated
with that hook based on its order of invocation. If you call a hook conditionally
or inside a loop, React won't be able to guarantee the consistent order of hook
calls across renders. This could lead to bugs like stale closures, where the state
doesn't update as expected, or even infinite loops.

To ensure that hooks work correctly, they must be called in the same order
on every render and cannot be conditionally invoked. This helps React to properly
manage state updates and component lifecycle methods.
*/

let index = 0;
let hooks = [];

const ReactX = (() => {
  const useState = (initialValue) => {
    const localIndex = index;
    index++;
    if (hooks[localIndex] === undefined) {
      hooks[localIndex] = initialValue;
    }

    const setState = (value) => {
      hooks[localIndex] = value;
    };

    return [hooks[localIndex], setState];
  };
  const resetIndex = () => {
    index = 0;
  };

  const useEffect = (callback, dependencyArray) => {
    let hasChanged = true;
    const oldDependencies = hooks[index];
    if (oldDependencies) {
      hasChanged = false;

      dependencyArray.forEach((dependency, index) => {
        const oldDependency = oldDependencies[index];
        const areTheSame = Object.is(dependency, oldDependency);

        if (!areTheSame) {
          hasChanged = true;
        }
      });
    }

    if (hasChanged) {
      callback();
    }
    hooks[index] = dependencyArray;
    index++;
  };

  return { useState, resetIndex, useEffect };
})();

const { useState, resetIndex, useEffect } = ReactX;

const Component = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("Thomas");

  useEffect(() => {
    console.log("useEffect");
  }, [name]);

  console.log(count, "Count");
  console.log(name, "Name");

  if (count !== 2) {
    setCount(2);
  }

  if (name !== "jack" && count === 2) {
    setCount(3);
    setName("jack");
  }
};

Component();
resetIndex();
Component();
resetIndex();
Component();
