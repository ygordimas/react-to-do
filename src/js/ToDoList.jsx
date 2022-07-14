import React from "react";

function ToDoList(props) {
  return (
    <ul className="todolist">
      {props.todos
        .filter((prop) => prop.complete == false)
        .map((prop) => (
          <li
            key={prop.id}
            onClick={() => props.toggle(prop.id)}
            style={{ textDecoration: prop.complete ? "line-through" : "" }}
          >
            {prop.text}
          </li>
        ))}
    </ul>
  );
}

export default ToDoList;
