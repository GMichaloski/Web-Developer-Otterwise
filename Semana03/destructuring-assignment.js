// Destructuring Assignment em Objetos

const person = {
    name: "joao",
    age: 27, 
    adress: {
        street: "vasco street",
        number: 98
    }
};

console.log(person.name);

const {name, age, adress: {street, number}} = person;
console.log(name);
console.log(street);

// Destructuring Assignment em Arrays

const names = ["joao", "pedro", "guilherme"];
const[,,terceiroNome] = names;
console.log(terceiroNome);

