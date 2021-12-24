let listaDeCompras = [
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
    ]
let precoCompra = (array) => {
    let preco = 0;
    for (let i = 0; i < array.length;i++){
        let {nome,quantidade,valor} = listaDeCompras[i];
        preco += quantidade*valor;
    }
    return preco;
}    

console.log(`R$: ${precoCompra(listaDeCompras)}`);