import React, { useState } from "react";
import { InputsContainer } from "./styled";

import { Button, CircularProgress, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";

import { login } from "../../services/user";
import { useNavigate } from "react-router";

const LoginForm = ({ rightButtonText, setRightButtonText }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
    login(form, navigate, clear, setRightButtonText, setIsLoading);
  };

  const { form, onChange, clear } = useForm({
    email: "",
    password: "",
  });

  return (
    <>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"email"}
            type={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name={"password"}
            value={form.password}
            type={"password"}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type={"onSubmit"}
            fullWidth
            variant="contained"
            color="primary"
            margin="normal"
          >
            {isLoading ? (
              <CircularProgress color={"inherit"} size={24} />
            ) : (
              <>Fazer login</>
            )}
          </Button>
        </form>
      </InputsContainer>
    </>
  );
};

export default LoginForm;
