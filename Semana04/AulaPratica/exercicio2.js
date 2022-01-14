const arrayGenerico = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]

let contemValor = (array, valor) => {
    return array.includes(valor);
}

console.log(contemValor(arrayGenerico, 9));