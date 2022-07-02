import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { StyledToolbar } from "./styled";
import Button from "@mui/material/Button";
import { goToLoginPage, goToRecipeListPage } from "../../routers/coordinator";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button
          onClick={() => {
            goToRecipeListPage(navigate);
          }}
          color="inherit"
        >
          Cookenu
        </Button>
        <Button
          onClick={() => {
            goToLoginPage(navigate);
          }}
          color="inherit"
        >
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
