import React from "react";
import { InputsContainer } from "./styled";

import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
// import axios from "axios";
// import { BASE_URL } from "../../constants/urls";
import { login } from "../../services/user";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
    login(form, navigate);
  };

  const { form, onChange } = useForm({
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
            Fazer login
          </Button>
        </form>
      </InputsContainer>
    </>
  );
};

export default LoginForm;
