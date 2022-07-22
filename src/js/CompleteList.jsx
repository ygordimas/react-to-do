import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { ButtonGroup, toggleButtonClasses, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";

function CompleteList(props) {
  const ListButton = styled(Button)(() => ({
    paddingInline: "4px",
    borderRadius: "24px",
  }));
  const [...todos] = props.todos.filter((prop) => prop.complete == true);

  const [checked, setChecked] = useState(true);

  const toggleChecked = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <>
      {todos.length > 0 && (
        <Container
          sx={{ display: "flex", justifyContent: "center", my: "24px" }}
        >
          <TableContainer component={Paper} sx={{ width: "fit-content" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Completed</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Task</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todos.map((prop, index) => {
                  return (
                    <TableRow
                      key={prop.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Checkbox
                          sx={{
                            "&:hover": { color: "primary.main" },
                          }}
                          disableRipple
                          checked={true}
                          value={prop.id}
                          onChange={(e) => {
                            const value = e.currentTarget.value;

                            setTimeout(() => {
                              props.toggle(value);
                            }, 120);
                          }}
                          inputProps={{
                            "aria-label": `{Checkbox for Task: ${prop.text}}`,
                          }}
                        />
                      </TableCell>
                      <TableCell>{prop.whenDay}</TableCell>
                      <TableCell>{prop.whenHour}</TableCell>
                      <TableCell sx={{ color: "surface.dark" }}>
                        {prop.text}
                      </TableCell>
                      <TableCell>
                        <ListButton
                          id={prop.id}
                          color="secondary"
                          variant="contained"
                          onClick={(e) => props.delete(e.currentTarget.id)}
                        >
                          <DeleteIcon />
                        </ListButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
}

export default CompleteList;
