// exercício 01
// com o encapsulador private não há como acessar de fora da classe
//apenas uma vez, quando instanciammos o objeto

// exercício 02
//apenas uma vez, quando instanciammos o objeto
//apenas uma vez, quando instanciammos o objeto, pois a classe Customer herda os atributos e métodos da classe pai User

// exercício 03
//Não é possivel acessar o atributo password, pois a classe User(pai) não disponibiliza métodos acessores para o atributo password.

import { Client } from "./Client";
import { Commerce } from "./Commerce";
import { Customer } from "./Customer";
import { Industry } from "./Industry";
import { Place } from "./Place";
import { Residence } from "./Residence";
import { User } from "./User";

// const Gabi = new User("000000", "gsbi@email.com", "Gabriella", "123456");

const Ana = new Customer(
  "000011",
  "ana@email.com",
  "Ana Vitória",
  "123456",
  "1234566789"
);

// console.log(Ana.getId());
// console.log(Ana.getEmail());
// console.log(Ana.getEmail());
// console.log(Ana.getCreditCard());
// console.log(Ana.purchaseTotal);
// Ana.introduceYourself();

const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};

console.log(client.name);
console.log(client.registrationNumber);
console.log(client.consumedEnergy);
client.calculateBill();

// const teste = new Place("20340-456"); Erro: Não é possível instanciar classe abstrata.

const Residence01 = new Residence(2, "23456-890");

const Commerce01 = new Commerce(5, "23456-089");

const Industry01 = new Industry(20, "45566-768");

console.log(Residence01.getCep());

console.log(Commerce01.getCep());

console.log(Industry01.getCep());
