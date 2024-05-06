import React, { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          placeholder="Update your item"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo(input)}>Add</button>
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
