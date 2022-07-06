import React, { useState, useEffect } from "react";
import Form from "./Form";

const LOCAL_STORAGE_KEY = `todoApp.todos`;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  return (
    <>
      <h1>My Todo List</h1>
      <br />
      <Form todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
