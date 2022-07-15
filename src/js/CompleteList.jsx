import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function CompleteList(props) {
  const [...todos] = props.todos.filter((prop) => prop.complete == true);

  return (
    <List>
      {todos.map((prop, index) => (
        <ListItem key={prop.id} divider={index < todos.length - 1}>
          <ListItemText>{prop.text}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

export default CompleteList;
