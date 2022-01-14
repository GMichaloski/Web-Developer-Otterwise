const arrayGenerico = [6,8,7]

const mediaAritmetica = (array) => {
    let soma = 0;
    array.forEach((element) => {
        soma += element;
    });
    return soma / array.length;
}

console.log(mediaAritmetica(arrayGenerico));