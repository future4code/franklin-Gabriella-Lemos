import React from "react";
import { ErrorImage, ErrorPageContainer } from "./styled";
import error from "../../assets/error.png";
import { Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <>
      <ErrorPageContainer>
        <ErrorImage src={error} />
      </ErrorPageContainer>{" "}
      <Typography color="primary" variant={"h4"} align={"center"}>
        {" "}
        Erro 404 - Página não enconstrada
      </Typography>
    </>
  );
};

export default ErrorPage;
