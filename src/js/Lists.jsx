import { useState } from "react";
import React from "react";
import { Tab, Tabs } from "@mui/material";
import ToDoList from "./ToDoList";

function Lists({ todos, toggle }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue);
    console.log(newValue);
  };

  return (
    <>
      <Tabs variant="fullWidth" value={selectedTab} onChange={handleTabChange}>
        <Tab label="Tasks" />
        <Tab label="Completed Tasks" />
      </Tabs>
      <ToDoList todos={todos} toggle={toggle} />
    </>
  );
}

export default Lists;
