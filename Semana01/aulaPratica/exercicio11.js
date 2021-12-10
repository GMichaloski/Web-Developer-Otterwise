let lado1 = 1,lado2 = 1,lado3 = 1,igualdades = 0;

if (lado1 === lado2){
    igualdades++;
}
if (lado2 === lado3){
    igualdades++;
}
if (lado1 === lado3){
    igualdades++;
}

switch (igualdades){
    case 0:
        console.log("O triângulo é escaleno!");
        break;
    case 1:
        console.log("O triângulo é isósceles!");
        break;
    case 3:
        console.log("O triângulo é equilátero!");
        break;
}