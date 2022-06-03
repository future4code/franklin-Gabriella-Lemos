import { useState } from "react";
import "./App.css";
import { ButtonSend } from "./buttons/ButtonSend";
import { InputChooseUser } from "./inputs/InputChooseUser";
import { InputMessage } from "./inputs/InputMessage";

function App() {
  const [inputUser,setInputMessage] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div className="App">
      <InputChooseUser  />
      <InputMessage />
      <ButtonSend />
    </div>
  );
}

export default App;
