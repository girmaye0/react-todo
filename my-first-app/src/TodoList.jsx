import React from "react";
import AddTodoForm from "./AddTodoForm";


    const todoList = [
      {id:1, title: 'Complete week 1 assignment'},
      {id:2, title: 'Do exercise'},
      {id:3, title: 'Shoping'},
    ];

function TodoList() {
            
  return (
    <div>
      <h1>
     Todo List
      </h1>
      <ul> {todoList.map((todo) => (<li key={todo.id}>{todo.title}</li>))} </ul>
    </div>
  );

}
export default TodoList;