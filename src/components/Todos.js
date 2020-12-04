import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const removeTodo = (idx) => {
    const newTodos = [...todos];

    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    setTodos([...todos, { text, isCompleted: false }]);
  };

  const completeTodo = (idx) => {
    const newList = [...todos];

    newList[idx].isCompleted = true;
    setTodos(newList);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <hr />
      <ul className="list-group w-50 mr-auto ml-auto mt-2">
        {todos.map((todo, i) => (
          <Todo
            key={i}
            index={i}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
