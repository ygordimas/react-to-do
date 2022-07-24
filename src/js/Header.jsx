import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AppBar, Toolbar, Typography } from "@mui/material";
import CommonButton from "./CommonButton";
import "../css/AppHeader.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import theme, { HeaderButton, StyledTextField } from "./theme";

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

  // //add button styling with a custom theme
  // const buttonStyles = {
  //   fontSize: 20,
  //   fontWeight: 700,
  //   backgroundColor: "red",
  //   "&:hover": {
  //     backgroundColor: "yellow",
  //   },
  // };

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

  //Form component

  //date getter

  // const handleDateChange = (newDate) => {
  //   setSelectedDate(newDate);
  //   console.log(selectedDate);
  // };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      onSubmit(text.value, selectedDate);
      resetValue();
    }
  };

  //task definer
  const taskInput = (
    <StyledTextField
      sx={{ width: "500px" }}
      label="Write your task here"
      id="outlined-basic"
      onKeyDown={keyPress}
      {...text}
    />
  );

  const addButton = (
    <HeaderButton
      theme={theme}
      size="large"
      variant="contained"
      onClick={(e) => {
        e.preventDefault();
        onSubmit(text.value, selectedDate);
        resetValue();
      }}
    >
      Add to List
    </HeaderButton>
  );

  const resetButton = (
    <CommonButton
      size="medium"
      variant="contained"
      onClick={() => clearToDos()}
    >
      Reset List
    </CommonButton>
  );

  //h1 component for header
  //the component="h1" ensures that screen readers will read it first while mantaining the aspect of an h6 element
  const todoLogo = (
    <Typography
      component="h1"
      sx={{
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 700,
        fontSize: 22,
        cursor: "default",
        color: "secondary.dark",
      }}
    >
      To-Do List with React + MaterialUI
    </Typography>
  );

  return (
    <AppBar
      position="static"
      // sx={{
      //   bgcolor: "primary.light",
      //   p: 2,
      //   borderBottom: 1,
      //   borderColor: "secondary.dark",
      // }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        {todoLogo}
        <form className="headerForm">
          {datePicker(selectedDate)}
          {taskInput}
          {addButton}
          {resetButton}
        </form>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
