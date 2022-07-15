import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

function ToDoList({ todos, toggle }) {
  console.log(todos);
  return (
    <Paper
      sx={{
        width: "fit-content",
        p: 2,
        my: 2,
      }}
    >
      <List>
        {todos
          .filter((prop) => prop.complete == false)
          .map((prop) => (
            <ListItem
              key={prop.id}
              onClick={() => toggle(prop.id)}
              style={{ textDecoration: prop.complete ? "line-through" : "" }}
            >
              {prop.text}
            </ListItem>
          ))}
      </List>
    </Paper>
  );
}

export default ToDoList;
