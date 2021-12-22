// 2. Crie uma função que recebe um objeto usuário e imprime se 
// ele é maior de idade, utilize os conhecimentos da aula para melhorar o código.

// Exemplo Entrada:
// { name: ‘Juca’, idade: 28 }

// Exemplo Saída:
// Maior de idade

const person = {
    name: "Gustavo",
    idade: 20
}
const verificarIdade = (objetoPessoa) => {
    let {name,idade} = objetoPessoa;
    return (idade >= 18 ? `${name} é maior de idade!` : `${name} é menor de idade!`);
}
console.log(verificarIdade(person))