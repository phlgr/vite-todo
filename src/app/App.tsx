import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

const exampleTodos = [
  { name: 'Fische füttern', description: 'Dringend!' },
  { name: 'Kochen', description: 'Nudeln' },
];

function App(): JSX.Element {
  const [todos, setTodos] = useState(exampleTodos);
  return (
    <BrowserRouter>
      <h1>Todo</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Description" />
        <input type="submit" />
      </form>
      {todos.map((todo) => (
        <div>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </BrowserRouter>
  );
}

export default App;
