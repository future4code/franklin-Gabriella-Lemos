import React from "react";
import styled from "styled-components";

const SizeInput = styled.input`
  width: 300px;
`;

const InputMessage = (props) => {
  return (
    <SizeInput
      onChange={props.handleInputMessage}
      value={props.inputMessage}
    ></SizeInput>
  );
};

export { InputMessage };
