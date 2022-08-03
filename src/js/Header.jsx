import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import "../css/AppHeader.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import theme, { StyledTextField } from "./theme";

function Header({ onSubmit, clearToDos }) {
  //for every input we can just use the custom hook below to set its value with the returned parameters
  const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
      value,
      onChange: (e) => setValue(e.target.value),
      resetValue: () => setValue(""),
    };
  };

  const { resetValue, ...text } = useInputValue("");

  const [selectedDate, setSelectedDate] = useState(new Date());

  const datePicker = () => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Date and Time"
          disablePast={true}
          value={selectedDate}
          InputLabelProps={{ style: { color: "green" } }}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      onSubmit(text.value, selectedDate);
      resetValue();
    }
  };

  //task definer
  const taskInput = (
    <StyledTextField
      label="Write your task here"
      id="outlined-basic"
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
      onKeyDown={keyPress}
      {...text}
    />
  );

  const addButton = (
    <Button
      size="large"
      variant="contained"
      onClick={(e) => {
        e.preventDefault();
        onSubmit(text.value, selectedDate);
        resetValue();
      }}
    >
      Add to List
    </Button>
  );

  const resetButton = (
    <Button size="medium" variant="contained" onClick={() => clearToDos()}>
      Reset List
    </Button>
  );

  //h1 component for header
  //the component="h1" ensures that screen readers will read it first while mantaining the aspect of an h6 element
  const todoLogo = (
    <Typography variant="h1">To-Do List with React + MaterialUI</Typography>
  );

  return (
    <AppBar position="static">
      <Toolbar sx={{}}>
        {todoLogo}
        <Box component="form">
          {datePicker(selectedDate)}
          {taskInput}
          {addButton}
          {resetButton}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
