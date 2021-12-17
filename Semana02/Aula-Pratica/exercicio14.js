let array = [1,2,3,4,-5,6,7,8,9,10], menorNum = array[0], indexNum = 0, i;

for(i = 1; i < array.length; i++){
    if(array[i] < menorNum){
        menorNum = array[i];
        indexNum  = i;
    }
}
console.log(`Menor valor: ${menorNum} \n Posição: ${indexNum}`);