import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

function CompleteList(props) {
  const [...todos] = props.todos.filter((prop) => prop.complete == true);

  return (
    <Paper
      sx={{
        width: "fit-content",
        p: 2,
        my: 2,
        mx: "auto",
      }}
    >
      <List>
        {todos.map((prop, index) => (
          <ListItem key={prop.id} divider={index < todos.length - 1}>
            <ListItemText>{prop.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default CompleteList;
