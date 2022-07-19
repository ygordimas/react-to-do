import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { ButtonGroup, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

function ToDoList(props) {
  const ListButton = styled(Button)(() => ({
    paddingInline: "7px",
  }));

  const [...todos] = props.todos.filter((prop) => prop.complete == false);

  return (
    <>
      {todos.length > 0 && (
        <Paper
          sx={{
            width: "fit-content",
            p: 2,
            my: 2,
            mx: "auto",
          }}
        >
          <List>
            {todos.map((prop, index) => {
              return (
                <ListItem
                  key={prop.id}
                  onClick={() => props.toggle(prop.id)}
                  divider={index < todos.length - 1}
                >
                  <ButtonGroup sx={{ mr: "8px" }} variant="contained">
                    <ListButton>
                      <DeleteIcon />
                    </ListButton>
                    <ListButton>
                      <DeleteIcon />
                    </ListButton>
                  </ButtonGroup>
                  {/* use id with textfields to make it accessible for screen readers */}
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="When?"
                    defaultValue={prop.whenDay + ` at ` + prop.whenHour}
                    margin="normal"
                    size="small"
                    sx={{ width: "auto" }}
                  />
                  {/* <Button variant="contained" color="info">
                  {prop.time.slice(0, 10).slice(8, 10)}/
                  {prop.time.slice(0, 10).slice(5, 7)}/
                  {prop.time.slice(0, 10).slice(0, 4)}
                </Button> */}
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="What?"
                    defaultValue={prop.text}
                    margin="normal"
                    size="small"
                    sx={{ width: "max-content" }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Paper>
      )}
    </>
  );
}

export default ToDoList;
