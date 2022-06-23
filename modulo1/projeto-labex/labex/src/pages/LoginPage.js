import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const goToAdminPage = () => {
    navigate("/admin/trips/list");
  };
  return (
    <>
      <p> Página Login Page</p>
      <button onClick={goToAdminPage}>home page adm</button>
    </>
  );
};
