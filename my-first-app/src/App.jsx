import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
  const [newTodo, setNewTodo] = useState(''); 

  const addTodo = (title) => {
    setNewTodo(title);
    console.log('New todo:', title);
   };
 return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <p>New Todo: {newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;


 