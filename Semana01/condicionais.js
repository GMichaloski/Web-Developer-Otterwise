// Os if's

let x = 1;

if (x> 5){
    // o que será executado caso a condição seja verdadeira
    console.log("x é maior do que 5");
}
else if(x === 5){
    // o que será executado caso o primeiro if seja falso e a segunda condicional verdadeira
    console.log("x é igual a 5");
}
else{
    // o que será executado caso as condições sejam falsas
    console.log("x é menor do que 5");
}


// OBSERVAÇÃO 
// condicional (x == 1) -> compara apenas o valor
// condicional (x === 1) -> compara não só o valor, mas também o tipo
// condicional (x != 1) -> compara apenas o valor
// condicional (x !== 1) -> compara não só o valor, mas também o tipo

// O Switch

let sinal = "%";

switch (sinal){
    case "+":
        console.log("Adição");
        break;
    case "-":
        console.log("Subtração");
        break;
    case "*":
        console.log("Multiplicação");
        break;
    case "%":
        console.log("Divisão");
        break;
}
