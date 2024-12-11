import React from 'react';

function TodoListItem({todo}) {
    return (
      <div>
        <ul>
          <li>{todo.title}</li>
        </ul>
      </div>
    );
  }
export default TodoListItem;