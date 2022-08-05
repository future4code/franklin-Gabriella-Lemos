// function checaTriangulo(a: Number, b: Number, c: Number): void {
//   if (a !== b && b !== c) {
//     return console.log("Escaleno");
//   } else if (a === b && b === c) {
//     return console.log("Equilátero");
//   } else {
//     return console.log("Isósceles");
//   }
// }

function imprimeTresCoresFavoritas() {
  const readline1 = require("readline");

  const rl1 = readline1.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl1.question(
    "Insira sua primeira, segunda e terceira cores favoritas: ",
    (cor1: string, cor2: string, cor3: string) => {
      console.log(cor1, cor2, cor3);
    }
  );
}

imprimeTresCoresFavoritas();
