import { useState, useEffect } from "react";
import "../css/App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";
import CompleteList from "./CompleteList";
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "./theme";
import Paper from "@mui/material/Paper";
import Lists from "./Lists";
import { Tab, Tabs } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  //the list of things to do
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const completed = [...todos].filter((element) => element.complete == true);

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
    <ThemeProvider theme={myTheme}>
      <Container maxWidth={false} disableGutters={true}>
        <Header
          onSubmit={(text, dateAndTime) => {
            if (text === "") return;

            setTodos([
              {
                text,
                whenDay:
                  (dateAndTime.getDate() <= 9
                    ? `0` + dateAndTime.getDate()
                    : dateAndTime.getDate()) +
                  `/` +
                  (dateAndTime.getMonth() + 1 <= 9
                    ? `0` + (dateAndTime.getMonth() + 1)
                    : dateAndTime.getMonth() + 1) +
                  `/` +
                  dateAndTime.getFullYear(),
                whenHour:
                  (dateAndTime.getHours() <= 9
                    ? `0` + dateAndTime.getHours()
                    : dateAndTime.getHours()) +
                  `:` +
                  (dateAndTime.getMinutes() <= 9
                    ? `0` + dateAndTime.getMinutes()
                    : dateAndTime.getMinutes()),
                complete: false,
                id: new Date().getTime(),
              },
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
          {completed.length > 0 && <Tab label="Completed Tasks" />}
        </Tabs>

        {selectedTab === 0 && (
          <ToDoList todos={todos} toggle={toggleComplete} />
        )}
        {selectedTab === 1 && (
          <CompleteList todos={todos} toggle={toggleComplete} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
