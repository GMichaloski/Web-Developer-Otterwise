const arrayGenerico = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

const vezesDez = (array) =>{
    let arrayMultiplicado = [];
    for (let i = 0; i < array.length; i++){
        arrayMultiplicado[i] = array[i] * 10;
    }
    return arrayMultiplicado;
}
console.log(vezesDez(arrayGenerico));