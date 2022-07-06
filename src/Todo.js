import React from "react";

export default function Todo({ todo, toggleTodo }) {
  let handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <li className="todoList">
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </li>
  );
}
