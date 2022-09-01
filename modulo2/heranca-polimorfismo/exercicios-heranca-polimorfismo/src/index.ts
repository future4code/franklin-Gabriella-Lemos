// exercício 01
// com o encapsulador private não há como acessar de fora da classe
//apenas uma vez, quando instanciammos o objeto

// exercício 02
//apenas uma vez, quando instanciammos o objeto
//apenas uma vez, quando instanciammos o objeto, pois a classe Customer herda os atributos e métodos da classe pai User

// exercício 03
//Não é possivel acessar o atributo password, pois a classe User(pai) não disponibiliza métodos acessores para o atributo password.

import { Customer } from "./Customer";
import { User } from "./User";

// const Gabi = new User("000000", "gsbi@email.com", "Gabriella", "123456");

const Ana = new Customer(
  "000011",
  "ana@email.com",
  "Ana Vitória",
  "123456",
  "1234566789"
);

console.log(Ana.getId());
console.log(Ana.getEmail());
console.log(Ana.getEmail());
console.log(Ana.getCreditCard());
console.log(Ana.purchaseTotal);
Ana.introduceYourself();
