import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, Title } from "./styled";

import Filter from "../filter/Filter";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#2D0C5E" }}>
      <Toolbar>
        <Container>
          <Title>TMDB</Title>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
