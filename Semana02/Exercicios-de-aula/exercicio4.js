let palavra = "O vasco é gigantesco";

function contadorPalavras(str){
    let tamanho = 0;
    let array = str.split(" ");
    for (let i = 0; i < array.length; i++){
        tamanho++;
    }
    return tamanho;
}
console.log(contadorPalavras(palavra));