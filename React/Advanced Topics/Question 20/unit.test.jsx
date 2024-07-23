//* Unit Test

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;


// Counter.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

test('increment button increments count', () => {
  render(<Counter />);

  const incrementButton = screen.getByText('Increment');
  const countDisplay = screen.getByText('Count: 0');

  fireEvent.click(incrementButton);

  expect(countDisplay.textContent).toBe('Count: 1');
});

