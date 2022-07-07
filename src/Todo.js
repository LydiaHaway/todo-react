import React, { useState } from "react";

export default function Todo({ todo, todos, toggleTodo, setTodos }) {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const editTodo = (id) => {
    const updateTodos = [...todos].map((todo) => {
      if (todo.id === id && editingText !== "") {
        todo.name = editingText;
      }
      return todo;
    });

    setTodos(updateTodos);
    setTodoEditing(null);
    setEditingText("");
  };

  return (
    <li className="todoList">
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />

        {todoEditing === todo.id ? (
          <input
            className="inputEdit"
            type="text"
            onChange={(e) => console.log(setEditingText(e.target.value))}
            value={editingText}
            placeholder={todo.name}
          ></input>
        ) : (
          <p className={`${todo.complete ? "complete" : ""}`}>{todo.name}</p>
        )}
      </label>
      {todoEditing === todo.id ? (
        <button className="edit" onClick={() => editTodo(todo.id)}>
          Save
        </button>
      ) : (
        <button className="edit" onClick={() => setTodoEditing(todo.id)}>
          Edit
        </button>
      )}
    </li>
  );
}
