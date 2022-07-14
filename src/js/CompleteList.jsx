import React from "react";

function CompleteList(props) {
  return (
    <ul className="todolist">
      {props.todos
        .filter((prop) => prop.complete == true)
        .map((prop) => (
          <li key={prop.id}>{prop.text}</li>
        ))}
    </ul>
  );
}

export default CompleteList;
