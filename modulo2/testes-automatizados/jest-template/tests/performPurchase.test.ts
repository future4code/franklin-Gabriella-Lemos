import { performPurchase } from "../src";
import { User } from "../src/types";

describe("testando a função performPurchase", () => {
  test("teste com um usuário com o saldo maior do que o valor de compra", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100,
    };

    const result = performPurchase(user, 40);

    expect(result).toEqual({
      name: "Astrodev",
      balance: 60,
    });
  });
});

describe("testando a função performPurchase", () => {
  test("teste com um usuário com o saldo igual ao valor de compra", () => {
    const user: User = {
      name: "Astrodev",
      balance: 50,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });
});

describe("testando a função performPurchase", () => {
  test("teste com um usuário com o saldo menor do que o valor de compra", () => {
    const user: User = {
      name: "Astrodev",
      balance: 30,
    };

    const result = performPurchase(user, 50);

    expect(result).not.toBeDefined();
  });
});
