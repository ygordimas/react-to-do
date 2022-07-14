import { useState, useEffect } from "react";
import "../css/App.css";
import Form from "./Form";
import ToDoList from "./ToDoList";
import CompleteList from "./CompleteList";
import List from "./List";

function App() {
  //the list of things to do
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  //toggle function for completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  //hook for updating the localStorage when there are changes to the state of toDos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Form
        onSubmit={(text) => {
          if (text === "") return;
          setTodos([
            { text, complete: false, id: new Date().getTime() },
            ...todos,
          ]);
        }}
      />

      <List props={todos} toggle={toggleComplete} />
      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}

export default App;
