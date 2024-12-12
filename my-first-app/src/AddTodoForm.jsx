import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Add a todo"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;