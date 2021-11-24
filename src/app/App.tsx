import React, { useEffect, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

const exampleTodos = [
  { name: 'Fische füttern', description: 'Dringend!' },
  { name: 'Kochen', description: 'Nudeln' },
];

function App(): JSX.Element {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(localStorageTodos);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTodo = { name, description };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  return (
    <BrowserRouter>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input type="submit" />
      </form>
      {todos &&
        todos.map((todo) => (
          <div>
            <h3>{todo.name}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
    </BrowserRouter>
  );
}

export default App;
