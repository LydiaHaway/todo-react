import React from "react";

export default function Todo({ todo, toggleTodo }) {
  const handleTodoClick = () => {
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
        <p className={`${todo.complete ? "complete" : ""}`}>{todo.name}</p>
      </label>
    </li>
  );
}
