const operator = process.argv[2];

const valor1 = Number(process.argv[3]);

const valor2 = Number(process.argv[4]);

switch (operator) {
  case "soma":
    console.log(valor1 + valor2);
    break;
  case "subt":
    console.log(valor1 - valor2);
    break;
}
