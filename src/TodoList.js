import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./TodoList.css";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todo, setTodo] = useState([
    // { id: uuid(), task: "Walk the dog" },
    // { id: uuid(), task: "Make breakfast" },
    // { id: uuid(), task: "Study coding" },
    // { id: uuid(), task: "Exercise" }
  ]);
  const addTask = task => {
    const newTask = { id: uuid(), task };
    setTodo(todo => [...todo, newTask]);
  };

  const removeTask = id => {
    setTodo(todo.filter(todo => todo.id !== id));
  };
  return (
    <div>
      <h1>TodoList</h1>
      <NewTodoForm addTask={addTask} />
      {todo.map(todo => (
        <div>
          <ul className="TodoList">
            <Todo
              id={todo.id}
              key={todo.id}
              task={todo.task}
              removeTask={removeTask}
            />
          </ul>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
