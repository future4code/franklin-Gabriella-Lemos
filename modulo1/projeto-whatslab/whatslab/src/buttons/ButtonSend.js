import React from "react";

const ButtonSend = (props) => {
  return (
    <div>
      <button onClick={props.sendMessage}>enviar</button>
    </div>
  );
};

export { ButtonSend };
