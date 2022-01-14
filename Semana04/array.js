// Métodos de array

// Adicionar novos valores em array

// concat 

// Não altera o array original, ele apenas retorna o array alterado
const students = ["Ana", "Bia", "Carlos"];

console.log(students.concat("Wallace"));
console.log(students);

// push 

// Altera o array original
const fruits = ["Banana", "Apple"]
fruits.push("Orange");
console.log(fruits);

// join

// Transforma em string!
const joinedFruits = fruits.join(", ");
console.log(joinedFruits);

// pop 

// Altera o array original, removendo o último elemento dele
// Retorna o elemento removido 

const users = ["a", "b", "c"];
const user = users.pop();
console.log(users);
console.log(user);

// shift

// Igual o pop, só que pro início do array

const users2 = ["a", "b", "c"];
const user2 = users2.shift();
console.log(users2);
console.log(user2);

// unshift

// Insere elementos no início do array, modificando o original 

users2.unshift("f");
console.log(users2);

// slice

// Remove X elementos, partindo do início 
const tools = ["chave de fenda", "martelo", "furadeira"];
const toolsPart = tools.slice(1);

console.log(toolsPart);

// splice 

// Serve para adicionar ou remover elementos

// Removendo
tools.splice(1,2);
console.log(tools)

// Adicionando 

tools.splice(1,0,"chave de boca", "martelete");
console.log(tools)

// reverse

const tiProducts = ["hd", "memória", "ssd", "placa de vídeo"];
tiProducts.reverse();
console.log(tiProducts);