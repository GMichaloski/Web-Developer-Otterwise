/*
1. Faça um programa que some todos os elementos do array abaixo e imprima na tela o somatório:
*/
const arrayGenerico = [10, 2, 78, 1, 92, 24, 13]

const soma = arrayGenerico.reduce((anterior, atual) => anterior + atual, 0);
console.log(soma);

/*
2. Levando em consideração o array abaixo, crie um programa que imprima na tela o valor total que o usuário terá que pagar.
*/

const frutasPreco = [{name: "banana", price: 4.5}, {name: "arroz", price: 8.3}, {name: "feijão", price: 10}, {name: "cebola", price: 6.3}]

const precoTotal = frutasPreco.reduce((acc, atual) => acc + atual.price, 0);
console.log(precoTotal)
