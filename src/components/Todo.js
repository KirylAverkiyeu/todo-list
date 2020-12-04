import React from "react";

import "./Todo.css";

const Todo = ({ todo, index, completeTodo, removeTodo }) => (
  <li
    className={`list-group-item list-group-item-${
      todo.isCompleted ? "success" : ""
    }`}
  >
    <h3 className="">{todo.text}</h3>

    <div className="manageTodo">
      {todo.isCompleted ? (
        ""
      ) : (
        <button
          type="button"
          className="btn btn-outline-secondary mr-2"
          onClick={() => completeTodo(index)}
        >
          Done
        </button>
      )}
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => removeTodo(index)}
      >
        X
      </button>
    </div>
  </li>
);
export default Todo;
