import React from "react";

const InputMessage = (props) => {
  
  return (
    <input
      onChange={props.handleInputMessage}
      value={props.inputMessage}
    ></input>
  );
};

export { InputMessage };
