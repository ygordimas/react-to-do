import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import theme, { ListButton } from "./theme";
import { motion, AnimatePresence } from "framer-motion";

function ToDoList(props) {
  const [...todos] = props.todos.filter((prop) => prop.complete == false);

  console.log(props);
  return (
    <>
      {todos.length > 0 && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "24px",
              }}
            >
              <TableContainer component={Paper} sx={{ width: "100%" }}>
                <Table aria-label="simple table">
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
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            sx={{ width: { xs: "80px" } }}
                            component="th"
                            scope="row"
                          >
                            <Checkbox
                              sx={{
                                "&:hover": { color: "primary.accent" },
                              }}
                              disableRipple
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
                          <TableCell sx={{ width: { xs: "100px" } }}>
                            {prop.whenDay}
                          </TableCell>
                          <TableCell sx={{ width: { xs: "70px" } }}>
                            {prop.whenHour}
                          </TableCell>
                          <TableCell sx={{ width: { xs: "100px" } }}>
                            {prop.text}
                          </TableCell>
                          <TableCell sx={{ width: { xs: "80px" } }}>
                            <ListButton
                              id={prop.id}
                              color="secondary"
                              variant="contained"
                              onClick={(e) => {
                                console.log(e.currentTarget.id);
                                props.delete(e.currentTarget.id);
                              }}
                            >
                              <DeleteIcon
                                sx={{ fill: `${theme.palette.primary.accent}` }}
                              />
                            </ListButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default ToDoList;
