import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AppBar, Toolbar, Typography } from "@mui/material";
import CommonButton from "./CommonButton";
import "../css/AppHeader.css";

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

  //Form component
  const todoForm = () => {
    return (
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {todoLogo}
        <form
          className="headerForm"
          onSubmit={(e) => {
            e.preventDefault();

            onSubmit(text.value);
            resetValue();
          }}
        >
          <TextField
            label="Write your task here"
            id="outlined-search"
            type="text"
            variant="outlined"
            {...text}
          />
          <CommonButton
            size="large"
            variant="contained"
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              onSubmit(text.value);
              resetValue();
            }}
          >
            Add to List
          </CommonButton>
          <CommonButton
            size="large"
            variant="contained"
            onClick={() => clearToDos()}
          >
            Reset List
          </CommonButton>
        </form>
      </Toolbar>
    );
  };

  //h1 component for header
  //the component="h1" ensures that screen readers will read it first while mantaining the aspect of an h6 element
  const todoLogo = (
    <Typography
      component="h1"
      sx={{
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 700,
        fontSize: 22,
      }}
    >
      To-Do List with React
    </Typography>
  );

  return (
    <header className="appHeader">
      <AppBar
        position="static"
        sx={{
          bgcolor: "primary.dark",
          p: 2,
        }}
      >
        {todoForm()}
      </AppBar>
    </header>
  );
}

export default Header;
