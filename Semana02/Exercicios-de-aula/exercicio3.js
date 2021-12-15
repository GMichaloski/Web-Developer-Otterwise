let array = [6, 21, 9, 2, 50, 98, 1], maior = 0;
for (let i = 0; i < array.length; i++){
    if ( array[i] > maior){
        maior = array[i];
    }
}
console.log(maior);