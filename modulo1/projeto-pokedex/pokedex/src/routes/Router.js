import { HomePage } from "../pages/HomePage/HomePage";
import { DetalhesPokemonPage } from "../pages/DetalhesPokemonPage/DetalhesPokemonPage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage.js";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="detalhes" element={<DetalhesPokemonPage />} />
          <Route path="pokedex" element={<PokedexPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
