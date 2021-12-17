let array = [-5,0,-3,-4,12], pares = 0, impares = 0, positivos = 0, negativos = 0;

for (let i = 0; i < array.length;i++){
    if (array[i] > 0){
        positivos++;
    }
    else if (array[i] < 0) {
        negativos++;
    }
    if(array[i]%2 === 0){
        pares++;
    }
    else{
        impares++;
    }
}
console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);