import { Home } from "../pages/Home/Home";
import { DetalhesPokemon } from "../pages/DetalhesPokemon/DetalhesPokemon";
import { Pokedex } from "../pages/Pokedex/Pokedex";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Router index element={<Home />} />
        <Router path="detalhes" element={<DetalhesPokemon />} />
        <Router path="pokedex" element={<Pokedex />} />
        <Router path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
