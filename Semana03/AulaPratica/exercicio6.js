const arrayGenerico = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const negativos = (array) => {
    let numeros = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            numeros.push(array[i]);
        }
    }
    return numeros;
}
console.log(negativos(arrayGenerico));

const positivos = (array) => {
    let numeros = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0){
            numeros.push(array[i]);
        }
    }
    return numeros;
}
console.log(positivos(arrayGenerico));

const pares = (array) => {
    let numeros = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            numeros.push(array[i]);
        }
    }
    return numeros;
}
console.log(pares(arrayGenerico));

const impares = (array) => {
    let numeros = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            numeros.push(array[i]);
        }
    }
    return numeros;
}
console.log(impares(arrayGenerico));