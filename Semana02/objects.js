const name = "joao";
const age = 27;

const person = {
    name: "joao",
    age: 27,
    adress: {
        street: "Rua Genérica",
        number: 777
    },
    "Data de criação": "14/12/2020",
    competencias: ["Javascript", "css", "html"]

}
// O javascript nos deixa alterar o valor de constantes no caso de objetos e arrays
person.age = 21;

// console.log(person.name);
// console.log(person.adress.number);
console.log(person)