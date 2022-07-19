import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Sopa'", () => {
    const ehPalindromo = checaPalindromo("sopa");
    expect(ehPalindromo).toEqual(true);
  });

  // it("retorna true para 'Socorram-me subi no onibus em marrocos'", () => {
  //   const string = "Socorram-me subi no onibus em marrocos";
  //   const vrfString = string.replace();
  //   const ehPalindromo = checaPalindromo(vrfString.replace("-", ""));
  //   expect(ehPalindromo).toEqual(true);
  // });
});
