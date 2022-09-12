import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  it("retorna true para [1, 2 ,1]", () => {
    const ehDuplicado = checaItensDuplicados([1, 2, 1]);
    expect(ehDuplicado).toEqual(true);
  });

  it('retorna true para ["a","a", "b", "c"]', () => {
    const ehDuplicado = checaItensDuplicados(["a", "a", "b", "c"]);
    expect(ehDuplicado).toEqual(true);
  });

  it("retorna true para []", () => {
    const ehDuplicado = checaItensDuplicados([]);
    expect(ehDuplicado).toEqual(false);
  });

  it("retorna true para [1]", () => {
    const ehDuplicado = checaItensDuplicados([1]);
    expect(ehDuplicado).toEqual(false);
  });

  it("retorna true para [1,2,3]", () => {
    const ehDuplicado = checaItensDuplicados([1, 2, 3]);
    expect(ehDuplicado).toEqual(false);
  });

  it('retorna true para ["f", "d", "e", "f"]', () => {
    const ehDuplicado = checaItensDuplicados(["f", "d", "e", "f"]);
    expect(ehDuplicado).toEqual(true);
  });

  it('retorna true para ["F", "d", "e", "f"]', () => {
    const ehDuplicado = checaItensDuplicados(["F", "d", "e", "f"]);
    expect(ehDuplicado).toEqual(true);
  });
});
