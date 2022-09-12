import { Button, CircularProgress, TextField } from "@mui/material";

import React, { useState } from "react";

import useForm from "../../hooks/useForm";
import { createRecipe } from "../../services/recipe";
import { AddRecipeFormContainer, InputsContainer } from "./styled";

const AddRecipesForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { form, onChange, clear } = useForm({
    title: "",
    description: "",
    image: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createRecipe(form, clear, setIsLoading);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <AddRecipeFormContainer>
          <InputsContainer>
            <TextField
              name={"title"}
              type={"title"}
              value={form.title}
              onChange={onChange}
              label={"Título"}
              variant={"outlined"}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name={"description"}
              type={"description"}
              value={form.description}
              onChange={onChange}
              label={"Descrição"}
              variant={"outlined"}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name={"image"}
              value={form.image}
              onChange={onChange}
              label={"Foto"}
              variant={"outlined"}
              fullWidth
              required
              margin={"normal"}
            />
          </InputsContainer>
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
              <>Adicionar Receita</>
            )}
          </Button>
        </AddRecipeFormContainer>
      </form>
    </>
  );
};

export default AddRecipesForm;
