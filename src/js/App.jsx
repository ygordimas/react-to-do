import { useState, useEffect } from "react";
import "../css/App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";
import CompleteList from "./CompleteList";
import List from "./List";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header
          onSubmit={(text) => {
            if (text === "") return;
            setTodos([
              { text, complete: false, id: new Date().getTime() },
              ...todos,
            ]);
          }}
          clearToDos={() => setTodos([])}
        />

        <List props={todos} toggle={toggleComplete} />
      </div>
    </ThemeProvider>
  );
}

export default App;
