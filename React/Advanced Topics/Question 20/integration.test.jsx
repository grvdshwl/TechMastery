// TodoItem.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

const TodoItem = ({ text }) => {
  return <li>{text}</li>;
};



const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  return (
    <div>
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
    </div>
  );
};


test('adding a new todo item to the list', () => {
  render(<TodoList />);

  const addButton = screen.getByText('Add Todo');

  fireEvent.click(addButton);

  const todoItem = screen.getByText('New Todo');

  expect(todoItem).toBeInTheDocument();
});
