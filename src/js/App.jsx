import { useState, useEffect } from "react";
import "../css/App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";
import CompleteList from "./CompleteList";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Tab, Tabs } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  //the list of things to do
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [selectedTab, setSelectedTab] = useState("0");

  const completed = todos.filter((element) => element.complete == true);
  const incomplete = todos.filter((element) => element.complete == false);

  const sortedTodos = incomplete.sort((a, b) => {
    if (a.whenDay == b.whenDay && a.whenHour == b.whenHour) {
      return 0;
    } else if (
      a.whenDay == b.whenDay &&
      a.whenHour.slice(0, 2) == b.whenHour.slice(0, 2)
    ) {
      return parseInt(a.whenHour.slice(3, 5)) < parseInt(b.whenHour.slice(3, 5))
        ? -1
        : 1;
    } else if (
      a.whenDay == b.whenDay &&
      a.whenHour.slice(0, 2) != b.whenHour.slice(0, 2)
    ) {
      return parseInt(a.whenHour.slice(0, 2)) < parseInt(b.whenHour.slice(0, 2))
        ? -1
        : 1;
    } else {
      return parseInt(a.whenDay.split("/").join("")) <
        parseInt(b.whenDay.split("/").join(""))
        ? -1
        : 1;
    }
  });

  //toggle function for completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  //hook for updating the localStorage when there are changes to the state of todos
  useEffect(() => {
    if (completed.length == 0 && incomplete.length > 0) setSelectedTab("0");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //state and function that will define which tab is selected

  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          bgcolor: "secondary.light",
          height: "fit-content",
          minHeight: "100vh",
          boxSizing: "border-box",
          paddingBottom: "24px",
        }}
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
                  (dateAndTime.getMonth() + 1 <= 9
                    ? `0` + (dateAndTime.getMonth() + 1)
                    : dateAndTime.getMonth() + 1) +
                  `/` +
                  (dateAndTime.getDate() <= 9
                    ? `0` + dateAndTime.getDate()
                    : dateAndTime.getDate()) +
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
          <ToDoList
            todos={sortedTodos}
            toggle={toggleComplete}
            delete={deleteTask}
          />
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
