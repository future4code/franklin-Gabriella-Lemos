import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { StyledToolbar } from "./styled";
import Button from "@mui/material/Button";
import { goToLoginPage, goToRecipeListPage } from "../../routers/coordinator";
import { useNavigate } from "react-router-dom";

const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLoginPage(navigate);
    } else {
      goToLoginPage(navigate);
    }
  };

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
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
