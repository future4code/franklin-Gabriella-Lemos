import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./routers/Router";
import theme from "./constants/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
