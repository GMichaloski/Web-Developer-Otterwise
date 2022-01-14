const arrayGenerico = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

const multiplicaPorX = (array, valor) => {
    return array.map(x => x * valor);
}

console.log(multiplicaPorX(arrayGenerico, 10));