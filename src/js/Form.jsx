import React, { useState, useEffect } from "react";

function Form({ onSubmit }) {
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input type="text" {...text} />
    </form>
  );
}

export default Form;
