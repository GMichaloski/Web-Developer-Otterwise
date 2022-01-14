const arrayGenerico = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127];

const trocaParPorX = (array) => {
    let newArray = []
    array.forEach(element => {
        element % 2 === 0? newArray.push("X") : newArray.push(element);
    });
    return newArray;
} 

console.log(trocaParPorX(arrayGenerico));