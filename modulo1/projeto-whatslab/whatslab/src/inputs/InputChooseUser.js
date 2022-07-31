import React from "react";

const InputChooseUser = (props) => {
  return (
    <input onChange={props.handleInputUser} value={props.inputUser}></input>
  );
};

export { InputChooseUser };
