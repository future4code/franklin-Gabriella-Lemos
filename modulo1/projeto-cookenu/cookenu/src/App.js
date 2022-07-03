import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./routers/Router";
import theme from "./constants/theme";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("token");

  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        />
        <Router
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
