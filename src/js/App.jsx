import { useState, useEffect } from "react";
import "../css/App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";
import CompleteList from "./CompleteList";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Paper from "@mui/material/Paper";
import Lists from "./Lists";
import { Tab, Tabs } from "@mui/material";
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

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

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

        <Tabs
          variant="fullWidth"
          value={selectedTab}
          onChange={handleTabChange}
        >
          <Tab label="Tasks" />
          <Tab label="Completed Tasks" />
        </Tabs>

        {selectedTab === 0 && (
          <ToDoList todos={todos} toggle={toggleComplete} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
