import { useState, useEffect } from "react";
import "../css/App.css";
import Form from "./Form";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  //toggle for completion
  const toggleComplete = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Form
        onSubmit={(text) =>
          setTodos([
            { text, complete: false, id: new Date().getTime() },
            ...todos,
          ])
        }
      />

      <ToDoList props={todos} toggle={toggleComplete} />

      {/* <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{ textDecoration: complete ? "line-through" : "" }}
          >
            {text}
          </div>
        ))}
      </div> */}

      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}

export default App;
