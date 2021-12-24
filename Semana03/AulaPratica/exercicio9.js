const arrayGenerico = [1,2,3,4,-5,6,7,8,9,10]

let menorNumero = (array) => {
    let menor = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] < menor){
            menor = array[i];
        }
    }
    return menor;
}
let maiorNumero = (array) => {
    let maior = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] > maior){
            maior = array[i];
        }
    }
    return maior;
}
console.log(`Maior: ${maiorNumero(arrayGenerico)}
Menor: ${menorNumero(arrayGenerico)}`);