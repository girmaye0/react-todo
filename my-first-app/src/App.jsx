import React, { useState} from "react";
function App() {
  const todoList = [
    {id:1, title: 'Complete week 1 assignment'},
    {id:2, title: 'Do exercise'},
    {id:3, title: 'Shoping'},
  ];
  return (
    <div>
      <h1>
     Todo List
      </h1>
      <ul> {todoList.map((todo) => (<li key={todo.id}>{todo.title}</li>))} </ul>
    </div>
  );
}
export default App;