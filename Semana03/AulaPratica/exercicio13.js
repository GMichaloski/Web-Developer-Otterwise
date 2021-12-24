let arrayGenerico = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

let vezesDez = (numero) => numero * 10;

let multiplarPor10 = (array, funcao) =>{
    let novoArray = array;
    for (let i = 0; i < novoArray.length;i++){
        novoArray[i] = funcao(novoArray[i]);
    }
    return novoArray;
}

console.log(multiplarPor10(arrayGenerico,vezesDez));