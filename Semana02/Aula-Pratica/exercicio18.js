let carrinho =[
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
    ],
    valorDaConta = 0;

for(let i = 0; i < carrinho.length; i++){
    valorDaConta += (carrinho[i].quantidade * carrinho[i].valor)
}
console.log(valorDaConta);