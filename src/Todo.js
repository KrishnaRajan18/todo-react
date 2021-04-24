import React from "react";
import "./Todo.css";

const Todo = props => {
  const handleRemove = e => {
    props.removeTask(props.id);
  };
  const testId = props.task ? props.task.replace(/[^A-Z0-9]/gi, "_") : "";
  return (
    <li data-testid={`Todo-${testId}`}>
      <div>-{props.task}</div>
      <button data-testid={`Todo-delete-${testId}`} onClick={handleRemove}>
        X
      </button>
    </li>
  );
};
export default Todo;
