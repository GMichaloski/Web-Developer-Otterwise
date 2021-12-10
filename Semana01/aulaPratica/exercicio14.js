let valor1 = 5,valor2 = 1,valor3 = 2, maior1,maior2;
maior1 = valor1;
if(valor2>maior1){
    maior1 = valor2;
    valor2 = 0;
}
else if(valor3>maior1){
    maior1 = valor3;
    valor3 = 0;
}
else{
    valor1 = 0;
}
maior2 = valor1;
if(valor2>maior2){
    maior2 = valor2;
    valor2 = 0;
}
if(valor3>maior2){
    maior2 = valor3;
    valor3 = 0;
}

console.log(maior1+maior2);
