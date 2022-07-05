import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = `todoApp.todos`;

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  let toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  let handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  };

  let handleClearTodos = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>My Todo List</h1>

      <input ref={todoNameRef} type="text" />
      <button className="add" onClick={handleAddTodo}>
        Add Todo
      </button>
      <br />
      <br />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <br />
      <div className="todoNotComplete">
        {todos.filter((todo) => !todo.complete).length} left to do
      </div>
      <br />
      <button className="clear" onClick={handleClearTodos}>
        Clear Completed
      </button>
    </>
  );
}

export default App;
