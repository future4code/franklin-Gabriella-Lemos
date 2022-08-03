console.log(
  "acessar os parâmetros passados na linha de comando devemos usar o progress.argv[i]"
);

const nome = process.argv[2];
const age = process.argv[3];
(nome === undefined) | (age === undefined)
  ? console.log("Olá,", nome, "! Você tem", age, "anos.")
  : console.log("está faltando ao menos um argumento");
