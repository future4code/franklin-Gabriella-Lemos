import { verifyAge } from "../src";
import { Casino, LOCATION, NACIONALITY, UserVerify } from "../src/types";

describe("testando a função verifyAge", () => {
  test("teste com um usuário com o saldo maior do que o valor de compra", () => {
    const user: UserVerify = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
  });
});

describe("testando a função verifyAge", () => {
  test("teste que receba um usuário americando que possa entrar em um estabelecimento no Brasil", () => {
    const user: UserVerify = {
      name: "Americandev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);
    expect(result.americans.allowed).toEqual(["Americandev"]);
  });
});

describe("testando a função verifyAge", () => {
  test("teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.", () => {
    const user01: UserVerify = {
      name: "Davidev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const user02: UserVerify = {
      name: "Fernandadev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const user03: UserVerify = {
      name: "Pedrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const user04: UserVerify = {
      name: "Brunodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Rockeat Night",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [user01, user02, user03, user04]);
    expect(result.brazilians.unallowed).toEqual([
      "Davidev BR",
      "Fernandadev BR",
    ]);
    expect(result.americans.allowed).toEqual(["Pedrodev EUA", "Brunodev EUA"]);
  });
});

describe("testando a função verifyAge", () => {
  test("teste com um usuário com o saldo maior do que o valor de compra", () => {
    const user: UserVerify = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });
});
