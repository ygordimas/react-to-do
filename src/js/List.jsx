import React from "react";
import ToDoList from "./ToDoList";
import CompleteList from "./CompleteList";

function List(props) {
  const [...todos] = props.props;

  return (
    <div>
      <ToDoList todos={todos} toggle={props.toggle} />
      <CompleteList todos={todos} />
    </div>
  );
}

export default List;
