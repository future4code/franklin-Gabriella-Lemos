import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Home Page tests", () => {
  test("Indicador de quantidade de produtos começa em 3", () => {
    const { getByText } = render(<App />);

    const qtdProduto = getByText(/Quantidade de produtos/i);

    expect(qtdProduto).toHaveTextContent("Quantidade de produtos: 3");
  });

  test("Sem valor mínimo, há quatro produtos, e isso é indicado corretamente", async () => {
    const { getByText, getByLabelText, getAllByText } = render(<App />);

    const qtdProduto = getByText(/Quantidade de produtos/i);

    const filtroMinimo = getByLabelText(/Filtro Mínimo/i);

    await userEvent.type(filtroMinimo, "{backspace}".repeat(2));

    const produtos = getAllByText(/Produto /);

    expect(produtos.length).toBe(4);
    expect(qtdProduto.textContent).toBe("Quantidade de produtos: 4");
  });

  test.skip("Filtro de busca por nome funciona, e encontra produto com 'legal' no nome", () => {
    const { getAllByText, getByLabelText } = render(<App />);
    const filtroNome = getByLabelText("Busca por nome:");
    userEvent.type(filtroNome, "legal");
    const produtos = getAllByText(/Produto /);
    expect(produtos).toHaveLength(1);
  });

  test.skip("Ordenação decrescente garante produto de preço maior na frente.", () => {
    const { getAllByText, getByLabelText, getByText } = render(<App />);
    const ordenacaoSelect = getByLabelText(/Ordenação:/);
    userEvent.selectOptions(ordenacaoSelect, getByText(/Decrescente/));
    const [primeiro, segundo] = getAllByText(/R\$/);
    const precoPrimeiro = Number(
      primeiro.textContent.split(" ")[1].split(",")[0]
    );
    const precoSegundo = Number(
      segundo.textContent.split(" ")[1].split(",")[0]
    );
    expect(precoPrimeiro).toBeGreaterThan(precoSegundo);
  });
});
