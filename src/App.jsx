import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
    if (error) {
      setError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) {
      setError("Enter your task");
      return;
    }

    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function handleDelete(index) {
    const newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div>
      <h1>Todo List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
