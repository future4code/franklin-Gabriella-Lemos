import { useState } from "react";
import "./App.css";
import { Etapa01 } from "./components/Etapa01";
import { Etapa02 } from "./components/Etapa02";
import { Etapa03 } from "./components/Etapa03";
import { Fimform } from "./components/Fimform";

function App() {
  const [state, setState] = useState("form01");

  const passaForm = () => {
    if (state === "form01") {
      return setState("form02");
    }
    if (state === "form02") {
      return setState("form03");
    }
    if (state === "form03") {
      return setState("form04");
    }
  };

  const FormRender = () => {
    switch (state) {
      case "form01":
        return <Etapa01 />;
        break;

      case "form02":
        return <Etapa02 />;
        break;

      case "form03":
        return <Etapa03 />;
        break;

      case "form04":
        return <Fimform />;
        break;

      default:
        break;
    }
  };
  return (
    <div className="App">
      <p>{FormRender()}</p>
      <button onClick={passaForm}>Próxima Etapa</button>
    </div>
  );
}

export default App;
