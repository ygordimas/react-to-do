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
        todo.id == id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteTask = (id) => {
    // const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(todos.filter((todo) => todo.id != id));
  };

  //hook for updating the localStorage when there are changes to the state of toDos
  useEffect(() => {
    if (todos.filter((element) => element.complete == false) == 0)
      setSelectedTab(1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [selectedTab, setSelectedTab] = useState("0");

  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Container
        sx={{ bgcolor: "secondary.light", height: "100%" }}
        maxWidth={false}
        disableGutters={true}
      >
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
          textColor="primary"
        >
          {todos.filter((element) => element.complete == false).length > 0 && (
            <Tab label="Tasks" value="0" />
          )}

          {completed.length > 0 && <Tab label="Completed Tasks" value="1" />}
        </Tabs>

        {selectedTab == 0 && (
          <ToDoList todos={todos} toggle={toggleComplete} delete={deleteTask} />
        )}
        {selectedTab == 1 && (
          <CompleteList
            todos={todos}
            toggle={toggleComplete}
            delete={deleteTask}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
