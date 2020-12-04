import React, { useState } from "react";

const TodoFrom = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const submitTodo = () => {
    if (todo.trim()) {
      addTodo(todo);
      setTodo("");
    } else {
      alert("Todo is empty!");
    }
  };
  return (
    <div className="input-group input-group-lg m-auto w-75">
      <input
        type="text"
        className="form-control"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-secondary"
          onClick={submitTodo}
          type="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoFrom;
