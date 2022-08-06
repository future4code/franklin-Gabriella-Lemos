function checaTriangulo(a: Number, b: Number, c: Number): void {
  if (a !== b && b !== c) {
    return console.log("Escaleno");
  } else if (a === b && b === c) {
    return console.log("Equilátero");
  } else {
    return console.log("Isósceles");
  }
}

const readlineSync = require("readline-sync");

const cor1 = readlineSync.question("Insira sua primeira cor favorita: ");

const cor2 = readlineSync.question("Insira sua segunda cor favorita: ");

const cor3 = readlineSync.question("Insira sua terceira cor favorita: ");

const cores = [cor1, cor2, cor3];

console.log(cores);

function checaAnoBissexto(ano: any) {
  const cond1 = ano % 400 === 0;
  const cond2 = ano % 4 === 0 && ano % 100 !== 0;
  cond1 || cond2
    ? console.log("É ano bissexto!")
    : console.log("Não é ano bissexto!");
}

function comparaDoisNumeros(num1: number, num2: number) {
  let maiorNumero: number;
  let menorNumero: number;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca = maiorNumero - menorNumero;

  console.log(diferenca);
}

function checaRenovacaoRG() {
  const readlineSync = require("readline-sync");
  const anoAtual = Number(readlineSync.question("Digite o ano atual: "));
  const anoNascimento = Number(
    readlineSync.question("Digite o ano de nascimento: ")
  );
  const anoEmissao = Number(
    readlineSync.question("Digite o ano de emissão do documento: ")
  );

  const idade = anoAtual - anoNascimento;
  const tempoCarteira = anoAtual - anoEmissao;

  const cond1 = idade <= 20 && tempoCarteira >= 5;
  const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
  const cond3 = idade > 50 && tempoCarteira >= 15;

  cond1 || cond2 || cond3
    ? console.log("Precisa renovar a carteira!")
    : console.log("Não precisa renovar a carteira!");
}

checaRenovacaoRG();
